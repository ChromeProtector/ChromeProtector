# ChromeProtector (in development)
An extension for Chrome that aims to protect (as much as possible) against typosquatting attacks


# Roadmap/Plan

1. Implement a simple detection of homograph phishing attack
2. Implement the similary checks against the list of protected domains (configured):
   - Levenshtein distance
   - other algorithms
   
3. Implement a list of regexes for valid/invalid URLs
4. Configuration data of the extension should be easy to export to compute some hash to validate configuration
5. Consider showing more info about SSL/TLS certificates
6. Consider saving SHA1 of certificates for logging purposes (just to show user that something changed, level of warning could be configured)
7. Implement a user-specific list of valid/invalid domains
