# ChromeProtector
An extension for Chrome that aims to protect (as much as possible) against typosquatting attacks


# Roadmap/Plan

1. Implement a simple detection of "unexpected" unicode codepoints in the domain name (warning or blocking)
2. Implement a simple list of blocked words from domain names
3. Implement words similary checks agains list of protected domains (configured)
4. Configuration data of the extension should be easy to export to compute some hash to validate configuration
5. Consider showing more info about SSL/TLS certificates
6. Consider saving SHA1 of certificates for logging purposes (just to show user that something changed, level of warning could be configured)
7. Implement a user-specific list of invalid domains
