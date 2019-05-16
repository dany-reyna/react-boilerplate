const lastPathSegment = url =>
  url
    .replace(/\/+$/, '')
    .split('/')
    .pop();

export default lastPathSegment;
