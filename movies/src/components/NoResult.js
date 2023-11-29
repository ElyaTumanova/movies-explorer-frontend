import React from 'react';


function NoResult ({isNotFound, isSearchError, isNoQuiery}) {

  return (
    <section className={`no-result ${isNotFound || isSearchError || isNoQuiery ? 'no-result_opened' : ''}`}>
      <h3 className={`no-result__heading ${isNotFound ? 'no-result__heading_opened' : ''}`}>Ничего не найдено</h3>
      <h3 className={`no-result__heading ${isSearchError ? 'no-result__heading_opened' : ''}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h3>
      <h3 className={`no-result__heading ${isNoQuiery ? 'no-result__heading_opened' : ''}`}>Нужно ввести ключевое слово</h3>
    </section>
  );
}

export default NoResult;