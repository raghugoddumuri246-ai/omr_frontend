import API from '..';

export const fetchOMRSheets = async (author) => {
  const response = await API.get(
    author ? `omr/fetchOMRSheets?author=${author}` : 'omr/fetchOMRSheets'
  );
  return response.data;
};

export const createOMR = async (
  numberOfQuestions,
  numberOfOptions,
  numberOfIntegerQuestions,
  author = 'default'
) => {
  const formData = {
    numberOfQuestions,
    numberOfOptions,
    numberOfIntegerQuestions,
    author,
  };
  const response = await API.post('/omr/createOMR', formData);
  return response.data;
};
