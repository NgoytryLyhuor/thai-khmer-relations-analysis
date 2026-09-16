const defaults = {
  responsive: true,
  maintainAspectRatio: false,
}

export const mainConflictChart = {
  type: 'line',
  data: {
    labels: ['1594 (លង្វែក)', '1907 (ផែនទី)', '1962 (ICJ)', '2008 (ព្រះវិហារ)', '2023 (ស៊ីហ្គេម)', '2025 (ព្រំដែន)', '2026 (សមុទ្រ)'],
    datasets: [
      {
        label: 'ជម្លោះនយោបាយ/ទឹកដី',
        data: [80, 60, 70, 95, 40, 90, 85],
        borderColor: '#1e3a8a',
        tension: 0.3,
        fill: false,
      },
      {
        label: 'ជម្លោះវប្បធម៌',
        data: [20, 10, 30, 85, 95, 60, 45],
        borderColor: '#d97706',
        tension: 0.3,
        fill: false,
      },
      {
        label: 'បញ្ហាថ្មី (ឧក្រិដ្ឋកម្ម/Scam)',
        data: [0, 0, 0, 10, 30, 95, 40],
        borderColor: '#dc2626',
        borderDash: [5, 5],
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
      },
    ],
  },
  options: {
    ...defaults,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      tooltip: {
        callbacks: {
          label(ctx) {
            return ctx.dataset.label + ': ' + ctx.raw + '%'
          },
        },
      },
    },
    scales: {
      y: { display: false, min: 0, max: 100 },
    },
  },
}

export const impact2025Chart = {
  type: 'doughnut',
  data: {
    labels: ['ប៉ះពាល់ពាណិជ្ជកម្ម', 'ជនស៊ីវិលផ្លាស់ទី', 'ខូចខាតហេដ្ឋារចនាសម្ព័ន្ធ'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#1e3a8a', '#dc2626', '#d97706'],
      },
    ],
  },
  options: {
    ...defaults,
    plugins: { legend: { position: 'right' } },
  },
}

export const gdpGrowthChart = {
  type: 'bar',
  data: {
    labels: ['២០២៤ (កំណើនពិត)', '២០២៥ (ប្រមាណ)', '២០២៦ (ការព្យាករ)'],
    datasets: [
      {
        label: 'កំណើនសេដ្ឋកិច្ច %',
        data: [6.0, 4.8, 3.0],
        backgroundColor: ['#1e3a8a', '#d97706', '#dc2626'],
      },
    ],
  },
  options: {
    ...defaults,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label(ctx) {
            return 'កំណើន ' + ctx.raw + '%'
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 7,
        ticks: { callback: (v) => v + '%' },
      },
    },
  },
}

export const touristChart = {
  type: 'bar',
  data: {
    labels: ['2019', '2024', '2025', '២០២៦ (មករា–ឧសភា)'],
    datasets: [
      {
        label: 'ភ្ញៀវទេសចរអន្តរជាតិ (លាននាក់)',
        data: [6.61, 6.7, 5.57, 1.54],
        backgroundColor: ['#1e3a8a', '#1e3a8a', '#d97706', '#dc2626'],
      },
    ],
  },
  options: {
    ...defaults,
    plugins: { legend: { display: false } },
    scales: { y: { min: 0 } },
  },
}

export const minWageChart = {
  type: 'bar',
  data: {
    labels: ['2018', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: 'ប្រាក់ឈ្នួលអប្បបរមា (USD/ខែ)',
        data: [170, 200, 204, 208, 210],
        backgroundColor: '#1e3a8a',
      },
    ],
  },
  options: {
    ...defaults,
    plugins: { legend: { display: false } },
    scales: { y: { min: 0 } },
  },
}

export const microCreditChart = {
  type: 'bar',
  data: {
    labels: ['1995', '2022', '2024'],
    datasets: [
      {
        label: 'ឥណទាន (ពាន់លាន USD)',
        data: [0.003, 9.4, 18],
        backgroundColor: ['#1e3a8a', '#d97706', '#dc2626'],
      },
    ],
  },
  options: {
    ...defaults,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label(ctx) {
            if (ctx.dataIndex === 0) return '≈ 3 លាន USD (50,000 គ្រួសារ)'
            if (ctx.dataIndex === 1) return ctx.raw + ' ពាន់លាន USD (2.1 លានគ្រួសារ)'
            return ctx.raw + ' ពាន់លាន USD (3.8 លានគ្រួសារ)'
          },
        },
      },
    },
    scales: { y: { min: 0, title: { display: true, text: 'ពាន់លាន USD' } } },
  },
}

export const forecastChart = {
  type: 'bar',
  data: {
    labels: ['2024 (ពិត)', '2025 (ពិតប្រហែល)', '2026 (ព្យាករ)', '2027 (ព្យាករ)', '2028 (ព្យាករ)', '2029 (គោលដៅ)'],
    datasets: [
      {
        label: 'កំណើនសេដ្ឋកិច្ច %',
        data: [6.0, 5.2, 3.9, 4.9, 5.1, 5.5],
        backgroundColor: ['#1e3a8a', '#1e3a8a', '#dc2626', '#d97706', '#d97706', '#059669'],
      },
    ],
  },
  options: {
    ...defaults,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label(ctx) {
            return 'កំណើន ' + ctx.raw + '%'
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 7,
        ticks: { callback: (v) => v + '%' },
      },
    },
  },
}