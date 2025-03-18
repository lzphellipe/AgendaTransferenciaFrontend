<template>
  <div id="app">
    <h1>Sistema de Agendamento de Transferências</h1>
    <AgendamentoTransferencia @transferencia-agendada="carregarExtrato" />
    <ExtratoTransferencias ref="extrato" />
  </div>
</template>

<script>
import AgendamentoTransferencia from './components/AgendamentoTransferencia.vue';
import ExtratoTransferencias from './components/ExtratoTransferencias.vue';

export default {
  components: {
    AgendamentoTransferencia,
    ExtratoTransferencias
  },
  methods: {
    carregarExtrato() {
      this.$refs.extrato.carregarTransferencias();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>