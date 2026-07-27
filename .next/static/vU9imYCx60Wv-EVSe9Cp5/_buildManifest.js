self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/study",
        "destination": "/archive/study"
      },
      {
        "source": "/volunteer",
        "destination": "/archive/volunteer"
      },
      {
        "source": "/aupair",
        "destination": "/archive/aupair"
      },
      {
        "source": "/work",
        "destination": "/archive/work"
      },
      {
        "source": "/immigration",
        "destination": "/archive/immigration"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()