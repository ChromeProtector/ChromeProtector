# ChromeProtector (in development)
An extension for Chrome browser that aims to warn (as much as possible) about the typosquatting attack

Internals:
 - It is a Chrome browser extension written in JavaScript
 - It uses the support vector machines (LIBSVM library using WebAssembly) for the typosquatting classification
 - It uses an additional simple heuristics to avoid false positives (at the moment)

Warnings:
 -  **Currenly this is a prototype**
 -  **It's NOT ready for the daily or work setting use**
 -  **It's using WebAssembly for LIBSVM** (SHA256: 44f15aa9f01961be84235725179d2aadb5bafc33ae48944548cef29616df44c8 of libsvm.wasm)

**Please be aware**

Note: 
 - The list of protected domains and support vector machine models (in libsvm format) needs to be provided in the configuration of the extension.
 - The support vector machine models should be created using **typosquatting-detector-trainer** project
 - The warning at the moment is shown via the icon for the extension:
   - White color - unknown status
   - Blinking Red - possible typosquatting attack

# Roadmap/Plan

1. Implement a simple detection of homograph phishing attack (**done**)
2. Implement a simple detection of typosquatting attack using the similarity check against the list of protected words (configuration, Levenshtein distance) (**done**)
3. Implement other and better algorithms for similarity check between words (**in progress**)
4. Implement better warning system than the simple icon with a color (**in progress**)
