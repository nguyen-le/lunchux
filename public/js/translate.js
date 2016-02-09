const languages = Symbol('languages');
const language = Symbol('language');

class Translate {
  constructor() {
    this[languages] = new Map([
      ['English', 'en'],
      ['Español', 'es']
    ]);
    this.useLanguage('English');
    this.dictionary = {
      'email': {
        'en': 'Email',
        'es': 'Correo electrónico'
      },
      'first_name': {
        'en': 'First Name',
        'es': 'Primer Nombre'
      },
      'last_name': {
        'en': 'Last Name',
        'es': 'Apellido'
      },
      'phone': {
        'en': 'Phone',
        'es': 'Teléfono'
      },
      'step_one_header': {
        'en': 'List ALL Household Members who are infants, children, and students up to and including grade 12',
        'es': 'Haga una lista de todos los bebés, niños y estudiantes hasta el grado 12 miembros de su hogar'
      }
    };
  }

  useLanguage(new_lang) {
    const abbr = this[languages].get(new_lang);
    if (abbr === undefined) {
      throw 'Invalid language choice.';
    } else {
      this[language] = abbr;
    }
  }

  get(word) {
    return this.dictionary[word][this[language]];
  }
}
export default new Translate;
