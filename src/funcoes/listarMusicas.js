const listarMusicas = () => {
  const musicas = (filtro = '') => {
    gridMusicas.innerHTML = ''; // Limpa a tabela antes de adicionar os resultados

    // Filtra as músicas com base no input de busca
    const musicasFiltradas = musicas.filter(musica =>
        musica.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    if (musicasFiltradas.length > 0) {
        const table = document.createElement('table');
        const header = `
          <thead>
              <tr>
                  <th>Nome da Música</th>
                  <th>Categoria</th>
              </tr>
          </thead>
        `;
        table.innerHTML = header;

        const tbody = document.createElement('tbody');
        musicasFiltradas.forEach(musica => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${musica.nome}</td>
                <td>${musica.categoria}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        gridMusicas.appendChild(table);
    } else {
        gridMusicas.innerHTML = '<p>Nenhuma música encontrada</p>';
    }
};
  return musicas;
}

export default listarMusicas;
