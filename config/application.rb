require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TumblrClone
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

  config.paperclip_defaults = {
    :storage => :s3,
    :s3_credentials => {
      :bucket => ENV["S3_BUCKET"],
      :access_key_id => ENV["S3_ACCESS_KEY_ID"],
      :secret_access_key => ENV["S3_SECRET_ACCESS_KEY"],
      :s3_region => ENV["S3_REGION"],
      :s3_host_name => "s3-us-west-1.amazonaws.com",
      :url => ":s3_domain_url"
    }
  }

  end
end
