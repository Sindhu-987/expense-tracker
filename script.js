const form = document.getElementById('expenseForm');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');

let expenseData = {
  labels: [],
  datasets: [{
    label: 'Expenses',
    data: [],
    backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
  }]
};

const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
  type: 'pie',
  data: expenseData,
  options: {
    responsive: true
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const category = categoryInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!category || isNaN(amount) || amount <= 0) return;

  // Add to chart
  expenseData.labels.push(category);
  expenseData.datasets[0].data.push(amount);
  expenseChart.update();

  // Clear form
  categoryInput.value = '';
  amountInput.value = '';
});
