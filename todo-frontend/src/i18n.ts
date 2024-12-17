import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'main': 'Main',
      'task': 'Task',
      'completed': 'Completed',
      'statistics': 'Statistics',
      'hero title': 'is the best way to organize your life perfectly',
      'hero subtitle': 'Register and plan your day with us ;)',
      'hero button text': 'Start planning',
      'loading': "Loading...",
      'done': "Done",
      'deadline': 'Deadline',
      "add task": "Add task",
      'title': 'Title',
      "text": 'Text',
      'photo':'Photo',
      'required': 'This field is required',
      'add':'Add',
      'delete':'Delete',
      'not done': 'Not done',
      'сompleted tasks': 'Completed tasks',
      'tasks left': 'Tasks left',
      'username': "Username",
      'email': "Email",
      'password':'Password',
      'registration':'Registration',
      'register':'Register',
      'password error': 'The password must be at least 8 characters long',
      'already':'Already have an account?',
      'sign-in': 'Sign In',
      "don`t have": "Don't have an account yet?"
    }
  },
  uk: {
    translation: {
      'main': 'Головна',
      'task': 'Завдання',
      'completed': 'Завершені',
      'statistics': 'Статистика',
      'hero title': 'це найкращий спосіб чудово організувати своє життя',
      'hero subtitle': 'Реєструйся та плануй свій день з нами ;)',
      'hero button text': 'Почати планувати',
      'loading': "Завантаження...",
      'done': 'Виконано',
      'deadline':'Дедлайн',
      "add task": "Додати завдання",
      'title': 'Заголовок',
      "text": 'Текст',
      'photo':'Фото',
      'required': "Це поле є обов'язковим",
      'add':"Додати",
      'delete':'Видалити',
      'not done': 'Не виконано',
      "completed tasks":'Виконаних завдань',
      'tasks left': 'Залишилось завдань',
      'username': "Ім'я користувача",
      'email': "Електронна адреса",
      'password':'Пароль',
      'registration':'Реєстарція',
      'register':'Зареєструватись',
      'password error': "Довжина паролю повинна бути не меншою за 8 символів",
      'already':'Вже маєте аканут?',
      'sign-in': 'Увійти',
      "don`t have": 'Ще не маєте акаунт?'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'uk', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
