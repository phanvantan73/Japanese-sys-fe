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
      password_confirmation: 'confirm password',
      keyword: 'keyword'
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
        hiragana: 'Hiragana'
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
    list_lessons: 'List of lessons',
    lesson_1: 'Lesson 1',
    lesson_2: 'Lesson 2',
    lesson_3: 'Lesson 3',
    lesson_4: 'Lesson 4',
    lesson_5: 'Lesson 5',
    lesson_6: 'Lesson 6',
    lesson_7: 'Lesson 7',
    lesson_8: 'Lesson 8',
    lesson_9: 'Lesson 9',
    lesson_10: 'Lesson 10',
    lesson_11: 'Lesson 11',
    lesson_12: 'Lesson 12',
    lesson_13: 'Lesson 13',
    post_1: 'Post 1',
    post_2: 'Post 2',
    post_3: 'Post 3',
    post_4: 'Post 4',
    post_5: 'Post 5',
    buttons: {
      vote: 'Vote'
    }
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
      password_confirmation: 'mật khẩu xác nhận',
      keyword: 'từ khóa'
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
        hiragana: 'Hiragana'
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
    list_lessons: 'Danh sách bài học',
    lesson_1: 'Bài 1',
    lesson_2: 'Bài 2',
    lesson_3: 'Bài 3',
    lesson_4: 'Bài 4',
    lesson_5: 'Bài 5',
    lesson_6: 'Bài 6',
    lesson_7: 'Bài 7',
    lesson_8: 'Bài 8',
    lesson_9: 'Bài 9',
    lesson_10: 'Bài 10',
    lesson_11: 'Bài 11',
    lesson_12: 'Bài 12',
    lesson_13: 'Bài 13',
    post_1: 'Bài viết về kimono',
    post_2: 'Bài viết số 2',
    post_3: 'Bài viết số 3',
    post_4: 'Bài viết số 4',
    post_5: 'Bài viết số 5',
    buttons: {
      vote: 'Vote'
    }
  }
};

const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
});

export default i18n;
