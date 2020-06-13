import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    welcomeMsg: 'Welcome to Your Vue.js App',
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    password_confirmation: 'Confirm password',
    validate: {
      required: 'Please input {field}',
      email: 'Please input correct email address',
      password_confirmation: 'Confirm password is not match'
    },
    attributes: {
      email: 'email',
      password: 'password',
      password_confirmation: 'confirm password'
    },
    menu: {
      home: 'Home',
      courses: {
        list: 'List of courses',
        n1: 'N1',
        n2: 'N2',
        n3: 'N3',
        n4: 'N4',
        n5: 'N5',
      },
      game: 'Game',
      word_research: 'Research word',
      posts: 'List of posts'
    },
    lessons: {
      list: {
        default: 'List',
        stt: 'STT',
        word: 'Word',
        speak: 'Speak',
        mean: 'Mean',
        sample: 'Sample',
        guide: 'Guide',
        hiragana: 'Hiragana',
        kanji: 'Kanji'
      },
      sentence_sample: 'Sentence sample',
      vocabulary: 'Vocabulary',
      kanji: 'Kanji',
      quiz: 'Quiz'
    },
    list_lessons: 'List of lessons'
  },
  'vi': {
    welcomeMsg: 'Chào mừng đến với ứng dụng Vue.js của bạn',
    login: 'Đăng nhập',
    register: 'Đăng ký mới',
    email: 'Email',
    password: 'Mật khẩu',
    password_confirmation: 'Xác nhận mật khẩu',
    validate: {
      required: 'Hãy nhập {field}',
      email: 'Hãy nhập email đúng định dạng',
      password_confirmation: 'Mật khẩu xác nhận không khớp'
    },
    attributes: {
      email: 'email',
      password: 'mật khẩu',
      password_confirmation: 'mật khẩu xác nhận'
    },
    menu: {
      home: 'Trang chủ',
      courses: {
        list: 'Danh sách khóa học',
        n1: 'N1',
        n2: 'N2',
        n3: 'N3',
        n4: 'N4',
        n5: 'N5',
      },
      game: 'Giải trí',
      word_research: 'Tra cứu từ',
      posts: 'Danh sách bài viết'
    },
    lessons: {
      list: {
        default: 'Danh sách',
        stt: 'STT',
        word: 'Từ vựng',
        speak: 'Phát âm',
        mean: 'Nghĩa của từ',
        sample: 'Mẫu câu',
        guide: 'Hướng dẫn dùng',
        hiragana: 'Hiragana',
        kanji: 'Kanji'
      },
      sentence_sample: 'Mẫu câu',
      vocabulary: 'Từ vựng',
      kanji: 'Kanji',
      quiz: 'Luyện tập'
    },
    list_lessons: 'Danh sách bài học'
  }
};

const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
});

export default i18n;
