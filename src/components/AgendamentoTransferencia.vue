<template>
    <div>
      <h2>Agendar Transferência</h2>
      <form @submit.prevent="agendarTransferencia">
        <div>
          <label for="contaOrigem">Conta de Origem:</label>
          <input type="text" id="contaOrigem" v-model="transferencia.contaOrigem" required />
        </div>
        <div>
          <label for="contaDestino">Conta de Destino:</label>
          <input type="text" id="contaDestino" v-model="transferencia.contaDestino" required />
        </div>
        <div>
          <label for="valorTransferencia">Valor da Transferência:</label>
          <input type="number" id="valorTransferencia" v-model="transferencia.valorTransferencia" required />
        </div>
        <div>
          <label for="dataTransferencia">Data da Transferência:</label>
          <input type="date" id="dataTransferencia" v-model="transferencia.dataTransferencia" required />
        </div>
        <button type="submit">Agendar</button>
      </form>
      <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>
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
  .erro {
    color: red;
  }
  </style>
