/* eslint-disable camelcase */

exports.shorthands = undefined;

// Membuat tabel songs
exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INT',
      notNull: true,
    },
    performer: {
      type: 'TEXT',
      notNull: true,
    },
    genre: {
      type: 'VARCHAR(128)',
      notNull: true,
    },
    duration: {
      type: 'SMALLINT',
      notNull: true,
    },
    album_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  // Menambahkan constraint UNIQUE agar tidak terjadi duplikasi data
  pgm.addConstraint('songs', 'unique_album_id', 'UNIQUE(album_id)');
};

// Menghapus tabel songs
exports.down = (pgm) => {
  pgm.dropTable('songs');
};
