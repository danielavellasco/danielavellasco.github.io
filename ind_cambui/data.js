var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6474467823753134,
          "pitch": 0.10110108767381654,
          "rotation": 4.71238898038469,
          "target": "1-cozinha"
        },
        {
          "yaw": 0.9587266241664398,
          "pitch": 0.07823114788736518,
          "rotation": 1.5707963267948966,
          "target": "4-banheiro"
        },
        {
          "yaw": 1.8899591872184134,
          "pitch": 0.10719567106316852,
          "rotation": 0,
          "target": "3-quarto"
        },
        {
          "yaw": -3.1235711550754246,
          "pitch": -0.04804561569986632,
          "rotation": 0,
          "target": "2-varanda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.025431891156312503,
          "pitch": 0.06924111832677582,
          "rotation": 0,
          "target": "2-varanda"
        },
        {
          "yaw": -3.0080979844907425,
          "pitch": 0.1315117541243218,
          "rotation": 1.5707963267948966,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-varanda",
      "name": "Varanda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01221003506473295,
          "pitch": 0,
          "rotation": 4.71238898038469,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quarto",
      "name": "Quarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8358865266161679,
          "pitch": 0.015477032172769967,
          "rotation": 4.71238898038469,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-banheiro",
      "name": "Banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008295543055512056,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ind. Cambui",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
