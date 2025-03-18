<template>
    <div>
      <h2>Extrato de Transferências</h2>
      <table>
        <thead>
          <tr>
            <th>Conta Origem</th>
            <th>Conta Destino</th>
            <th>Valor</th>
            <th>Taxa</th>
            <th>Data Transferência</th>
            <th>Data Agendamento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transferencia in transferencias" :key="transferencia.id">
            <td>{{ transferencia.contaOrigem }}</td>
            <td>{{ transferencia.contaDestino }}</td>
            <td>{{ transferencia.valorTransferencia }}</td>
            <td>{{ transferencia.taxa }}</td>
            <td>{{ transferencia.dataTransferencia }}</td>
            <td>{{ transferencia.dataAgendamento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transferencias: []
      };
    },
    async created() {
      await this.carregarTransferencias();
    },
    methods: {
      async carregarTransferencias() {
        try {
          const response = await this.$axios.get('/transferencias');
          this.transferencias = response.data;
        } catch (error) {
          console.error('Erro ao carregar transferências:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>