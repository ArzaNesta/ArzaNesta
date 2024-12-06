const ctx = document.querySelector('.activity-chart');
const ctx2 = document.querySelector('.prog-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],
        datasets: [{
            label: 'Waktu',
            data: [8, 6, 7, 5, 10, 7, 4],
            backgroundColor: '#1e293b',
            hoverBackgroundColor: '#4a90e2',
            borderWidth: 3,
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: true
                },
                grid: {
                    display: true,
                    color: '#1e293b'
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: 'Class GPA',
            data: [5, 6, 7, 4, 8, 7, 8],
            borderColor: '#0891b2',
            tension: 0.4
        },
        {
            label: 'aver GPA',
            data: [3, 6, 4, 7, 7, 8, 9],
            borderColor: '#caba04',
            tension: 0.4
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                border: {
                    display: true
                },
                grid: {
                    display: false,
                    color: '#1e293b'
                }
            },
            y: {
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                    dash: [5,5]
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});