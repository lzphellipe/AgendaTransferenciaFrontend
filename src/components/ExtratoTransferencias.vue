<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Extrato de Transferências</h2>
    <div class="card p-4 shadow">
      <table class="table table-striped">
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
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background-color: #f8f9fa;
  border-radius: 10px;
}

.table {
  width: 100%;
  margin-bottom: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>