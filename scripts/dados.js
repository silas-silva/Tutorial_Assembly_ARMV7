const instrucoes = {
    "add" : "Adiciona dois registradores, colocando o resultado no primeiro registrador.",
    "sub":  "Subtrai um registrador de outro, colocando o resultado no primeiro registrador.",
    "rsb":  "Subtrai um registrador de outro, colocando o resultado no segundo registrador.",
    "mov":  "Move um valor para um registrador.",
    "ldr":  "Carrega um valor da memória para um registrador.",
    "str":  "Armazena o valor de um registrador na memória.",
    "cmp":  "Compara dois valores em registradores.",
    "beq":  "Pula para um rótulo se os valores comparados são iguais.",
    "bne":  "Pula para um rótulo se os valores comparados são diferentes.",
    "bge":  "Pula para um rótulo se o valor comparado é maior ou igual.",
    "blt":  "Pula para um rótulo se o valor comparado é menor.",
    "bgt":  "Pula para um rótulo se o valor comparado é maior.",
    "ble":  "Pula para um rótulo se o valor comparado é menor ou igual.",
    "b":    "Pula para um rótulo.",
    "bx":   "Pula para um endereço, mudando para o modo de execução especificado.",
    "bl":   "Pula para um rótulo, salvando o endereço atual no registrador de link.",
    "svc":  "Chamada de sistema.",
    "nop":  "Nenhuma operação, o que significa que nada acontece.",
    "bic" : "A instrução BIC (bit clear) é uma instrução de processador em linguagem de montagem que permite limpar (zerar) um ou mais bits em um registrador de 32 bits",
    "lsl" : "Usada para deslocar os bits de um registrador para a esquerda por um número especificado de posições.",
    "=" : "O sinal de igual (=) é um operador no assembly que é usado para definir uma constante no programa. Ele é chamado de operador de atribuição imediata",
    ".equ" : "É uma diretiva do Assembly que define um valor constante",
    ".word" : "A diretiva '.word' no assembly do ARM é usada para reservar uma palavra de memória de 32 bits e inicializar o seu valor com o dado especificado",
    "" : "",
    "" : ""

}

const registradores = {
    "R0-R12" : "Registradores de uso geral. Podem ser usados para armazenar dados ou endereços temporários",
    "R13 (SP)" : "Ponteiro de Pilha. Armazena o endereço da posição atual da pilha",
    "R14 (LR)" : "Registrador de Retorno de Link. Armazena o endereço de retorno após uma chamada de sub-rotina",
    "R15 (PC)" : "Contador de Programa. Armazena o endereço da próxima instrução a ser executada",
    "CPSR" : "Registrador de Status do Programa Atual. Armazena informações sobre o estado atual do programa, como a condição do último resultado da operação",
    "S0-S31" : "Registradores de Ponto Flutuante de Precisão Simples. Armazena valores de ponto flutuante de precisão simples (32 bits)",
    "D0-D31" : "Registradores de Ponto Flutuante de Precisão Dupla. Armazena valores de ponto flutuante de precisão dupla (64 bits)",
    "Q0-Q31" : "Registradores de Ponto Flutuante SIMD (Single Instruction Multiple Data). Armazena um vetor de valores de ponto flutuante de precisão simples ou dupla (128 bits)",
    "FPEXC" : "Registrador de Controle de Extensão de Ponto Flutuante. Controla as configurações das extensões de ponto flutuante",
    "FPSID" : "Registrador de Identificação de Extensão de Ponto Flutuante. Identifica as extensões de ponto flutuante disponíveis",
    "FPSCR" : "Registrador de Status de Controle de Ponto Flutuante. Armazena informações sobre o estado atual das operações de ponto flutuante",
    "IT" : "Registrador de Condição de Execução. Controla a execução condicional de instruções em sequência",
    "PC" : "Contador de Programa. Armazena o endereço da próxima instrução a ser executada",
    "SP" : "Ponteiro de Pilha. Armazena o endereço da posição atual da pilha",
    "LR" : "Registrador de Retorno de Link. Armazena o endereço de retorno após uma chamada de sub-rotina",
    "APSR" : "Registrador de Status de Programa de Aplicação. Armazena informações sobre o estado atual do programa",
    "EPSR" : "Registrador de Status de Programa de Exceção. Armazena informações sobre o estado atual do programa durante uma exceção",
    "IEPSR" : "Registrador de Status de Programa de Exceção de Interrupção. Armazena informações sobre o estado atual do programa durante uma interrupção",
    "MSP" : "Ponteiro de Pilha Principal. Armazena o endereço da posição atual da pilha principal",
    "PSP" : "Ponteiro de Pilha de Processo. Armazena o endereço da posição atual da pilha de processo",
    "PRIMASK" : "Registrador de Máscara de Interrupção Principal. Controla o estado de ativação ou desativação da máscara de interrupção principal",
}

