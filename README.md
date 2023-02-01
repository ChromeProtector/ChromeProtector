# ChromeProtector (in development)
An extension for Chrome that aims to warn (as much as possible) about the typosquatting attacks

**Currently this is a prototype. Quite far from perfect solution. I'm currently learning about the API of Chrome extensions. Please be aware**

Note:

The list of protected words needs to be provided in the extension configuration e.g.:
 -  google
 -  facebook
 -  etc.

The warning at the moment is shown via the color of the icon for the extension:
   - White color - unknown status
   - Yellow - you visited your protected webpage (protected words needs to be configured)
   - Purple - you visited a webpage which domain has a word very similar to one of your protected word
   - Red - you visited a bad webpage (homograph attack)

# Roadmap/Plan

1. Implement a simple detection of homograph phishing attack (**done**)
2. Implement a simple detection of typosquatting attack using the similarity check against the list of protected words (configuration, Levenshtein distance) (**done**)
3. Implement other and better algorithms for similarity check between words
4. Implement better warning system than the simple icon with a color
