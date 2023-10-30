document.addEventListener("DOMContentLoaded", function() {
  // ...

  function validateForm() {
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const termsCheckbox = document.getElementById("concordo-com-termos");

    // Verifique se os termos estão aceitos
    if (!termsCheckbox.checked) {
      alert("Você deve aceitar os termos de contrato.");
      return;
    }

    // Verifique se o email é válido (pode usar uma expressão regular para uma validação mais precisa)
    const email = emailInput.value;
    if (!isValidEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Verifique se o nome de usuário está preenchido
    const username = usernameInput.value;
    if (username.trim() === "") {
      alert("Por favor, insira um nome de usuário.");
      return;
    }

    // Verifique se a senha e a confirmação de senha são iguais
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    // Se todas as condições forem atendidas, envie o formulário
    submitForm();
  }

  const registerButton = document.getElementById("register-button");
  registerButton.addEventListener("click", validateForm);

  // Função para verificar se o email é válido (uma validação simples)
  function isValidEmail(email) {
    // Aqui você pode usar uma expressão regular ou outra validação mais precisa
    // Este exemplo apenas verifica se o email contém um "@".
    return email.includes("@");
  }
});

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const valid = passwordInput.value === confirmPasswordInput.value;

  if (valid) {
    passwordInput.classList.remove("invalid");
    confirmPasswordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    confirmPasswordInput.classList.add("valid");
  } else {
    passwordInput.classList.remove("valid");
    confirmPasswordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    confirmPasswordInput.classList.add("invalid");
  }
}

function validateUsername() {
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("username-error");

  if (usernameInput.value.length < 6) {
    usernameInput.classList.add("invalid");
    usernameError.textContent = "O nome de usuário deve conter pelo menos 6 caracteres.";
  } else {
    usernameInput.classList.remove("invalid");
    usernameError.textContent = "";
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("invalid");
    passwordError.textContent = "A senha deve conter pelo menos 6 caracteres.";
  } else {
    passwordInput.classList.remove("invalid");
    passwordError.textContent = "";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const caixaTermos = document.getElementById("concordo-com-termos");
  const textoTermos = document.getElementById("texto-termos");
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.querySelector(".toggle-password-button"); // Selecionando o botão

  caixaTermos.addEventListener("change", function () {
    if (caixaTermos.checked) {
      textoTermos.style.color = "#3DBB33"; // Cor padrão quando aceito
    } else {
      textoTermos.style.color = "#5b5b6d"; // Cor mais escura quando não aceito
    }
  });

  // Adicionando um evento "input" para a caixa de senha
  passwordInput.addEventListener("input", function () {
    // Verifica se há texto na caixa de senha
    if (passwordInput.value.trim() !== "") {
      togglePasswordButton.style.display = "block"; // Mostra o ícone do olho
    } else {
      togglePasswordButton.style.display = "none"; // Oculta o ícone do olho
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const showPasswordButton = document.getElementById("showPasswordButton");

  showPasswordButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // Mostra a senha
      confirmPasswordInput.type = "text"; // Mostra a confirmação de senha
      showPasswordButton.textContent = "Ocultar Senha";
    } else {
      passwordInput.type = "password"; // Oculta a senha
      confirmPasswordInput.type = "password"; // Oculta a confirmação de senha
      showPasswordButton.textContent = "Mostrar Senha";
    }
  });

function scrollToSmoothly(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp - startTime;
    const scrollFraction = currentTime / duration;
    const ease = scrollFraction * (2 - scrollFraction);
    window.scrollTo(0, startPosition + distance * ease);
    if (currentTime < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

function irParaAreasDeAtuacao() {
  const areasContainer = document.querySelector(".areasTakeContainer");
  const offsetTop = areasContainer.offsetTop;
  const duration = 1000; // Tempo em milissegundos (1 segundo)

  scrollToSmoothly(offsetTop, duration);
}

function goTop() {
  const header = document.querySelector("header");
  const offsetTop = header.offsetTop;
  const duration = 1000; // Tempo em milissegundos (1 segundo)

  scrollToSmoothly(offsetTop, duration);
}

const areasButton = document.querySelector(".areasButton");
areasButton.addEventListener("click", irParaAreasDeAtuacao);

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", goTop);

function redirecionarParaLink() {
  // Substitua "SEU_LINK_AQUI" pela URL para onde você deseja redirecionar
  const link = "SEU_LINK_AQUI";
  window.location.href = link;
}
});