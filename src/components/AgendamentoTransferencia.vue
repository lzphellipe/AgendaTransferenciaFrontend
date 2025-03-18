<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Agendar Transferência</h2>
    <form @submit.prevent="agendarTransferencia" class="card p-4 shadow">
      <div class="mb-3">
        <label for="contaOrigem" class="form-label">Conta de Origem:</label>
        <input type="text" id="contaOrigem" v-model="transferencia.contaOrigem" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="contaDestino" class="form-label">Conta de Destino:</label>
        <input type="text" id="contaDestino" v-model="transferencia.contaDestino" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="valorTransferencia" class="form-label">Valor da Transferência:</label>
        <input type="number" id="valorTransferencia" v-model="transferencia.valorTransferencia" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="dataTransferencia" class="form-label">Data da Transferência:</label>
        <input type="date" id="dataTransferencia" v-model="transferencia.dataTransferencia" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Agendar</button>
      <p v-if="mensagemErro" class="text-danger mt-3">{{ mensagemErro }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transferencia: {
        contaOrigem: '',
        contaDestino: '',
        valorTransferencia: null,
        dataTransferencia: ''
      },
      mensagemErro: ''
    };
  },
  methods: {
    async agendarTransferencia() {
      try {
        await this.$axios.post('/transferencias', this.transferencia);
        alert('Transferência agendada com sucesso!');
        this.$emit('transferencia-agendada'); 
      } catch (error) {
        if (error.response) {
         
          this.mensagemErro = 'Erro ao agendar transferência: ' + error.response.data;
        } else if (error.request) {
          
          this.mensagemErro = 'Erro de conexão: O servidor não respondeu.';
        } else {
          
          this.mensagemErro = 'Erro ao configurar a requisição: ' + error.message;
        }
        console.error('Erro completo:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.card {
  background-color: #f8f9fa;
  border-radius: 10px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>