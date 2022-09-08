import './app-filter.css'
const AppFilter = () => {
  return <div className='btn-group' > 
  <button className='btn-ligth'
  type='button'>
            Всі працівники
  </button>
  <button className='btn-outline-ligth'
  type='button'>
            На підвищення
  </button>
  <button className='btn-outline-ligth'
  type='button'>
            Зарплата білльше 1000$
  </button>
  </div>;
};
export default AppFilter;
