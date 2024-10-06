// Input validation

const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
);
const submitBtn = document.querySelector("#submitBtn");
const promptMsgContainer = document.querySelector(".prompt-msg-container");
const submittedFormContainer = document.querySelector(".submitted-form-container");
const formContainer = document.querySelector(".form-container");

// Given an input element this function validates it's value based on a regex.
const validatePassword = function (password) {
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const passwordRegex = /^\d+$/;
  return passwordRegex.test(password);
};

// Given an input value this function toggles the prompt msg based on if the password's input value is validated.
const displayMsgPrompt = (passwordValue) => {
  return validatePassword(passwordValue)
    ? promptMsgContainer.classList.add("disabled")
    : promptMsgContainer.classList.remove("disabled");
};

// Given an input element & if it's value is validated this function toggles its appearence. This function requires an input param bc it is used twice, at the 2 different password inputs.
const styleLockerIcon = function (input, passwordIsValid) {
  if (passwordIsValid) {
    if (input.nextElementSibling.classList.contains("fa-unlock")) {
      return;
    } else {
      input.nextElementSibling.classList.replace("fa-lock", "fa-unlock");
      return;
    }
  } else {
    if (input.nextElementSibling.classList.contains("fa-unlock")) {
      input.nextElementSibling.classList.replace("fa-unlock", "fa-lock");
      return;
    }
    return;
  }
};

// If passwords match this function toggles the state of the submit button(actually an a tag.)
const styleSubmitBtn = function (passwordsMatch) {
  if (passwordsMatch && password.value.length > 0) {
    if (submitBtn.classList.contains("disabled")) {
      submitBtn.classList.remove("disabled");
      submitBtn.setAttribute("tabIndex", 0);
      return;
    }
  } else {
    submitBtn.classList.add("disabled");
    submitBtn.setAttribute("tabIndex", -1);
    return;
  }
};

// Given 2 params, this function checks if they have the same value.
const passwordMatch = function (elem1, elem2) {
  return elem1.value === elem2.value;
};

// This listener, on input's value change calls all previous functions. First styles the locker icon based on the password value. Then determines whether to display the prompt msg. Finally whether to activate the submit btn. To do that checks if password is valid & confirm password has the same value.
password.addEventListener("input", function () {
  styleLockerIcon(this, validatePassword(this.value));
  displayMsgPrompt(this.value);
  validatePassword(this.value) &&
    styleSubmitBtn(passwordMatch(password, confirmPassword));
});

// This listener does the same except the prompt msg-this input doesn't have one.
confirmPassword.addEventListener("input", function () {
  styleLockerIcon(this, passwordMatch(password, confirmPassword));
  validatePassword(password.value) &&
    styleSubmitBtn(passwordMatch(password, confirmPassword));
});

// This listener upon clicking the submit button, firstly displays a confirmation msg & hides the password form container and then loads the next page with a 2sec delay.
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  submittedFormContainer.style.display = "flex";
  formContainer.style.display = "none";

  setTimeout(() => {
    window.location.href = "../dashboard/dashboard.html";
  }, 2000);
});
