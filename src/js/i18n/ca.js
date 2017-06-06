export default {
  // the `locale` parameter is mandatory, it enables react-translate to use
  // the right rules for singular and plural
  locale: "es",
  Layout: {
    TITLE: "Hello world",
    KEY_WITH_PARAMS: "Hello {{name}}",
    KEY_WITH_PLURAL: [
      "You have {{n}} message",
      "You have {{n}} messages",
    ],
  },
}
