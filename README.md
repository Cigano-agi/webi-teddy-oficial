# Teddy + WEBi

Apresentação da proposta de implantação: migração completa para a API oficial da Meta, qualificação com Sofia, transferência para a equipe e follow-up oficial.

## Abrir e apresentar

Abra `index.html` no navegador. Para usar também o checklist, sirva esta pasta com um servidor HTTP estático e abra a URL local. Um exemplo com Python:

```sh
python -m http.server 8080
```

- Setas esquerda/direita e Page Up/Page Down: mudar de tela.
- Home/End: ir ao início/fim.
- Índice: escolher uma seção. Escape fecha o índice.
- Salvar PDF: abrir a impressão do navegador. Escolha salvar como PDF, A4 paisagem e desative os cabeçalhos/rodapés do navegador.
- Preparar acessos: abrir `checklist.html`.

A apresentação também funciona por rolagem. No celular, as seções se reorganizam para leitura vertical. A preferência de movimento reduzido do sistema é respeitada.

## Editar

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Texto, ordem das telas e diagramas em HTML editável |
| `styles.css` | Identidade visual, responsividade, animações e impressão |
| `deck.js` | Navegação, índice e repetição do fluxo |
| `assets/` | Logotipos e fontes locais |
| `checklist.html` | Preparação dos acessos e ativos para a implantação |
| `checklist-data.json` | Campos, responsáveis, caminhos das telas e estados permitidos |
| `checklist.js` / `checklist.css` | Formulário local, resumo para baixar, impressão e aparência |
| `fontes.html` | Documentação oficial que sustenta os critérios da proposta |
| `vercel.json` | Configuração da hospedagem estática e cabeçalhos HTTP |

Os títulos do índice são lidos do atributo `data-title` de cada seção. Ao inserir uma tela, preserve um `id` único e seu `aria-labelledby`. Os diagramas usam elementos HTML e CSS, sem imagens achatadas ou ferramentas externas.

Os logotipos pertencem às respectivas marcas. Inter acompanha sua licença em `assets/Inter-LICENSE.txt`.

## Escopo da proposta

O material descreve a solução a implantar. A liberação operacional depende de acessos, configuração, testes e aceite com a Teddy. Regras, limites e condições da Meta devem ser conferidos na data de implantação.

A apresentação não coleta dados nem recebe credenciais. O checklist orienta a preparação de acessos; senhas, tokens e segredos devem circular apenas pelo canal privado combinado com a equipe.

O preenchimento do checklist fica apenas na memória da aba: não há servidor de coleta, salvamento automático ou dados preenchidos no repositório. Use **Baixar resumo** ou **Copiar resumo** antes de fechar. Campos não preenchidos também aparecem no resumo para orientar as pendências.

## Publicar uma edição

Clone ou faça um fork deste repositório, edite os arquivos e revise no navegador. É um site estático, sem instalação de dependências ou comando de build. Na Vercel, importe o repositório com o preset **Other**, sem Build Command, e diretório de saída `.`. Também pode ser servido por qualquer hospedagem de HTML estático.

Mantenha dados preenchidos e credenciais fora dos commits. Depois de publicar, confira os links de apresentação, checklist e fontes em celular e desktop.
