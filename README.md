# Bytebank - Controle Financeiro

Este repositório contém um sistema de controle financeiro básico desenvolvido em TypeScript para registrar transações, controlar saldo, e exibir extratos.

## Visão Geral

O sistema é composto por várias funcionalidades principais:

### Conta

- `Conta` é responsável por controlar o saldo, registrar transações e fornecer informações sobre transações.

### Componentes

- `SaldoComponent`: Atualiza e exibe o saldo na interface do usuário.
- `DataComponent`: Atualiza e exibe a data de acesso na interface do usuário.
- `ExtratoComponente`: Renderiza e exibe as transações em formato de extrato na interface do usuário.

### Nova Transação

- `nova-transacao-component.js`: Lida com o formulário de criação de novas transações, validando e registrando-as na conta.

## Estrutura do Projeto

- `types/`: Contém as definições de tipos (`Transacao`, `TipoTransacao`, etc.).
- `utils/`: Funções utilitárias para formatação de datas e valores.
- `components/`: Componentes que interagem com a interface do usuário.

## Instruções de Uso

1. Clone o repositório.
2. Execute o código TypeScript e verifique se as dependências estão instaladas.
3. Abra o arquivo `index.html` no seu navegador para interagir com o sistema.

## Configuração do TypeScript

O projeto foi configurado para compilar o código TypeScript para a pasta `dist/js` com as seguintes opções no `tsconfig.json`:

```json
{
	"compilerOptions": {
		"target": "ES2022",
		"outDir": "./dist/js",
		"noEmitOnError": true
	},
	"include": [
		"./src/**/*"
	]
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a [Licença MIT](LICENSE).