let config  = exports; // Config object declaration. Do not change.
config.file = {};

config.port             = 4000;     // Listening port
config.environment      = 'dev';
config.cacheTimeout     = 10000;    // Duration of the data cached in milliseconds
config.persistence      = 'file';   // Persistence system - Only 'file' is currently implemented
config.file.extension   = 'csv';    // or 'json'. Extension of the storage files when config.persistence is set to 'file'
config.file.encoding    = 'utf8';   // Encoding of the storage files when config.persistence is set to 'file'
config.file.delimiter   = ';';