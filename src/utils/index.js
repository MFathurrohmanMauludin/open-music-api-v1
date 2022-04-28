const mapDBToModel = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

const mapSongDBToModel = ({
  id,
  name,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
}) => ({
  id,
  name,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
});
module.exports = {mapDBToModel, mapSongDBToModel};
