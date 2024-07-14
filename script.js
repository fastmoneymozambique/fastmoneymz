document.addEventListener('DOMContentLoaded', function() {
  const investAmountInput = document.getElementById('investAmount');
  const depositButton = document.getElementById('depositButton');
  const inviteButton = document.getElementById('inviteButton');
  
  // Adiciona um ouvinte de evento para validar o montante de investimento
  investAmountInput.addEventListener('input', function() {
    const investAmount = parseFloat(investAmountInput.value);
    if (investAmount >= 150) {
      depositButton.classList.remove('hidden');
    } else {
      depositButton.classList.add('hidden');
    }
  });
  
  // Substitua '867969698' pelo número de WhatsApp desejado
  const whatsappNumber = '867969698';
  const depositButtonLink = `https://wa.me/${whatsappNumber}/?text=Olá,%20gostaria%20de%20fazer%20um%20depósito%20de%20`;

  // Adiciona um ouvinte de evento para o botão de depósito
  depositButton.addEventListener('click', function() {
    const investAmount = investAmountInput.value;
    window.open(`${depositButtonLink}${investAmount}%20MZN`);
  });

  // Adiciona um ouvinte de evento para o botão de convidar usuários
  inviteButton.addEventListener('click', function() {
    const inviteMessage = encodeURIComponent('Olá, gostaria de te convidar para conhecer o FAST MONEY MZ. Visite o site https://aviatorbot2024.github.io/fastmoneymoza/ para mais informações.');
    window.open(`https://wa.me/?text=${inviteMessage}`);
  });
});