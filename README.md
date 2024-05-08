# brute-force-pin-form
Script that tries every combination for a 4 digit PIN by manipulating the form's DOM. The elements and the delay between requests can be configured.

<b>The pin should follow the pattern [0-9]{4}.<b>

## How it works?
- Insert the correct submit button dom in submitButton attribute.
- If the pin input is a unique input, turn uniqueDigitInput to true and fill digitInput.
- If there are input for each char, fill the first, second, third and fourth elements.
- Set the delay time on delayMs.
- Paste on the console 

#### Config example

```javascript
let configs = {
    'delayMs': 5,
    'uniqueDigitInput': false,
    'elements': {
        'digitInputs': {
            'first': document.getElementsByTagName('input')[15],
            'second': document.getElementsByTagName('input')[16],
            'third': document.getElementsByTagName('input')[17],
            'fourth': document.getElementsByTagName('input')[18]
        },
        'digitInput': null,
        'submitButton': document.getElementsByClassName('btn btn-submit')[0]
    }
}


```
