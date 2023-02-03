# ChromeProtector (in development)
An extension for Chrome that aims to warn (as much as possible) about the typosquatting attacks

# Extension details
**Currently this is a very early prototype. Quite far from perfect solution. I'm currently learning about the API of Chrome extensions. Please be aware**

The list of protected words needs to be provided in the extension configuration e.g.:
 -  google
 -  facebook
 -  etc.

After changing configuration restart the browser.

The warning at the moment is shown via the color of the icon for the extension:
   - White color - unknown status
   - Yellow - you visited your protected webpage
   - Purple - you visited a webpage which domain has a word very similar to one of your protected word
   - Red - you visited a webpage that could be a homograph attack

# Roadmap/Plan

1. Implement a simple detection of homograph phishing attack (**done**)
2. Implement a simple detection of typosquatting attack using the similarity check against the list of protected words (configuration, Levenshtein distance) (**done**)
3. Analyze fonts and their relation to homograph attacks or other URL attacks
4. Implement better algorithms and tools
5. Implement a good warning system with good usability for the extension

# Resources 

- https://www.ietf.org/rfc/rfc1035.txt
- https://en.wikipedia.org/wiki/Internationalized_domain_name
- https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md
- https://www.iana.org/domains/idn-tables
- https://www.evertype.com/alphabets/index.html
- https://www.dns.pl/en/IDN/registration_rules
- https://chromedriver.chromium.org/home
- https://en.wikipedia.org/wiki/Unicode
- https://www.codeproject.com/Tips/557423/Rendering-Text-with-OpenType-Fonts-Using-GDI
- https://github.com/googlefonts/fontdiffenator
