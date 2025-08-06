# Community Event Signup Form

A clean and interactive registration form for a **Community Event**, built using **HTML**, **CSS**, and **JavaScript**, with real-time validation and user-friendly feedback.

---

## Requirement Analysis

The form collects the following fields:

| Field         | Required | Validation Rule                                  |
|---------------|----------|--------------------------------------------------|
| Full Name     |   Yes    | Must contain only letters and spaces (min 2 chars) |
| Email ID      |   Yes    | Valid email format (e.g., `user@example.com`)     |
| Phone Number  |   Yes    | Must be exactly 10 digits                         |
| Age           |   Yes    | Must be a number ≥ 18                            |
| Interests     |   No     | Optional checkboxes (Music, Art, Dance)          |

-  All required fields must be filled before submission
-  Custom validation messages shown for invalid fields
-  Form will not submit unless all validations pass

---

##  Design

The form is styled with a modern and clean layout:

-  Responsive card-style container centered on the screen
-  Valid fields are highlighted in green
-  Invalid fields are highlighted in red with error messages
-  Real-time validation on input
-  Clear button feedback and accessible design

---

##  Implementation

###  Technologies Used

- **HTML5**: Form structure (`index.html`)
- **CSS3**: Styling and feedback (`style.css`)
- **JavaScript**: Validation logic (`script.js`)

###  Features

- Live input validation with instant feedback
- Modular code structure for reusability and clarity
- Alerts for successful submission or errors
- Visual cues (colors + error messages) for user guidance

---

##  Testing

The form has been tested for the following cases:

###  Edge Cases

| Test Case                              | Expected Behavior                         |
|----------------------------------------|--------------------------------------------|
| Empty required fields                  | Shows red outline + error message          |
| Invalid email format                   | Shows error: "Enter a valid email address" |
| Phone number less/more than 10 digits  | Error: "Enter a valid 10-digit phone no!"  |
| Age below 18                           | Error: "Must be 18 or above!"              |
| Valid input in all fields              | Shows success alert                        |

---

##  Link
https://samyuktharg.github.io/Form-Validation/3index.html
