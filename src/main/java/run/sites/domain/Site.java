package main.java.run.sites.domain;

import com.google.api.server.spi.config.AnnotationBoolean;
import com.google.api.server.spi.config.ApiResourceProperty;
import com.google.common.base.Preconditions;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Cache;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Parent;

import java.net.MalformedURLException;
import java.net.URL;

import main.java.run.sites.form.SiteForm;

import static main.java.run.sites.service.OfyService.ofy;

/**
 * Site class stores site information.
 */
@Entity
@Cache
public class Site {

  /**
   * The id for the datastore key.
   * <p>
   * We use automatic id assignment for entities of Site class.
   */
  @Id
  private long id;

  /**
   * The name of the site.
   */
  @Index
  private String name;

  /**
   * The source URL of the site.
   */
  private URL source;

  /**
   * The description of the site.
   */
  private String description;

  /**
   * Holds Profile key as the parent.
   */
  @Parent
  @ApiResourceProperty(ignored = AnnotationBoolean.TRUE)
  private Key<Profile> profileKey;

  /**
   * The userId of the owner.
   */
  @ApiResourceProperty(ignored = AnnotationBoolean.TRUE)
  private String ownerUserId;

  /**
   * Just making the default constructor private.
   */
  private Site() {
  }

  public Site(final long id,
              final String ownerUserId,
              final SiteForm siteForm) {
    Preconditions.checkNotNull(siteForm.getName(), "The name is required");
    Preconditions.checkNotNull(siteForm.getSource(), "The source is required");
    this.id = id;
    this.profileKey = Key.create(Profile.class, ownerUserId);
    this.ownerUserId = ownerUserId;
    updateWithSiteForm(siteForm);
  }

  public long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public String getSource() {
    return source.toString();
  }

  @ApiResourceProperty(ignored = AnnotationBoolean.TRUE)
  public Key<Profile> getProfileKey() {
    return profileKey;
  }

  // Get a String version of the key
  public String getWebsafeKey() {
    return Key.create(profileKey, Site.class, id).getString();
  }

  public String getOwnerUserId() {
    return ownerUserId;
  }

  /**
   * Returns owner's display name.
   *
   * @return owner's display name. If there is no Profile, return his/her userId.
   */
  public String getOwnerDisplayName() {
    Profile owner = ofy().load().key(getProfileKey()).now();
    if (owner == null) {
      return ownerUserId;
    } else {
      return owner.getDisplayName();
    }
  }

  /**
   * Updates the Site with SiteForm.
   * This method is used upon object creation as well as updating existing Sites.
   *
   * @param siteForm contains form data sent from the client.
   */
  public void updateWithSiteForm(SiteForm siteForm) {
    try {
      this.name = siteForm.getName();
      this.source = new URL(siteForm.getSource());
      this.description = siteForm.getDescription();
    } catch (MalformedURLException e) {
      this.source = null;
    }
  }

  @Override
  public String toString() {
    StringBuilder stringBuilder = new StringBuilder("Id: " + id + "\n")
        .append("Name: " + name + "\n")
        .append("Source: " + source + "\n");
    return stringBuilder.toString();
  }
}
