import { BusRoute, PickupPoint } from '../types/transport';

export const busRoutes: BusRoute[] = [
  // BUS NO. 1
  {
    id: 'BUS_1',
    name: 'INDA',
    areas: [
      {
        name: 'INDA',
        fare: 1250,
        pickupPoints: [
          { value: 'KHOSLA_ELECTRIC', label: 'KHOSLA ELECTRIC' },
          { value: 'COLLEGE_GATE', label: 'COLLEGE GATE' },
          { value: 'KAMALA_CABIN', label: 'KAMALA CABIN' },
          { value: 'INDIAN_BANK', label: 'INDIAN BANK' },
          { value: 'INDA_PETROL_PUMP', label: 'INDA PETROL PUMP' },
          { value: 'LOCAL_THANA', label: 'LOCAL THANA' },
          { value: 'INDA_MODE', label: 'INDA MODE' }
        ]
      },
      {
        name: 'BUS STAND',
        fare: 1200,
        pickupPoints: [
          { value: 'NEW_TRAFFIC', label: 'NEW TRAFFIC' },
          { value: 'BUS_STAND', label: 'BUS STAND' }
        ]
      },
      {
        name: 'GOLE BAZAR',
        fare: 1100,
        pickupPoints: [
          { value: 'JANATA_MARKET', label: 'JANATA MARKET' },
          { value: 'SABJIT_MARKET', label: 'SABJIT MARKET' },
          { value: 'MUSLIN', label: 'MUSLIN' }
        ]
      }
    ]
  },

  // BUS NO. 3
  {
    id: 'BUS_3',
    name: 'SALUA',
    areas: [
      {
        name: 'SALUA',
        fare: 2200,
        pickupPoints: [
          { value: 'SALUA', label: 'SALUA' },
          { value: 'NOU_SUTING', label: 'NOU SUTING' }
        ]
      },
      {
        name: 'GOPALI',
        fare: 2100,
        pickupPoints: [
          { value: 'GOPALI', label: 'GOPALI' }
        ]
      },
      {
        name: 'PREM BAZAR',
        fare: 1550,
        pickupPoints: [
          { value: 'PREM_BAZAR', label: 'PREM BAZAR' },
          { value: 'PARTY_OFFICE', label: 'PARTY OFFICE' }
        ]
      },
      {
        name: 'DVC',
        fare: 1500,
        pickupPoints: [
          { value: 'GAS_GODOWN', label: 'GAS GODOWN' },
          { value: 'DURGA_MANDIR', label: 'DURGA MANDIR' },
          { value: 'TALTAGICHA_BAZAR', label: 'TALTAGICHA BAZAR' },
          { value: 'DVC_MARKET', label: 'DVC MARKET' },
          { value: 'RATH_MATH', label: 'RATH MATH' }
        ]
      },
      {
        name: 'AYMA',
        fare: 1200,
        pickupPoints: [
          { value: 'AYMA', label: 'AYMA' }
        ]
      },
      {
        name: 'NEW SETTLEMENT',
        fare: 1000,
        pickupPoints: [
          { value: 'GIRI_MAIDAN', label: 'GIRI MAIDAN' },
          { value: 'JAGANNATH_MANDIR', label: 'JAGANNATH MANDIR' },
          { value: 'BIG_BAZAR', label: 'BIG BAZAR' },
          { value: 'PRINTING_PRESS', label: 'PRINTING PRESS' }
        ]
      },
      {
        name: 'ATULMONI',
        fare: 900,
        pickupPoints: [
          { value: 'PNK', label: 'PNK' }
        ]
      },
      {
        name: 'MATHURAKATI',
        fare: 900,
        pickupPoints: [
          { value: 'DHOBI_GHAT', label: 'DHOBI GHAT' },
          { value: 'SETTI_HOTEL', label: 'SETTI HOTEL' },
          { value: 'JAIHIND_NAGAR', label: 'JAIHIND NAGAR' },
          { value: 'MATHURAKATI', label: 'MATHURAKATI' },
          { value: 'JAFRI_QUARTER', label: 'JAFRI QUARTER' }
        ]
      },
      {
        name: 'MS TYPE',
        fare: 800,
        pickupPoints: [
          { value: 'MS_TYPE_BUILDING', label: 'MS TYPE BUILDING' },
          { value: 'MS_TYPE_WATER_TANK', label: 'MS TYPE WATER TANK' }
        ]
      },
      {
        name: 'NIMPURA',
        fare: 700,
        pickupPoints: [
          { value: 'NIMPURA_INDIRA_PARK', label: 'NIMPURA INDIRA PARK' }
        ]
      }
    ]
  },

  // BUS NO. 5
  {
    id: 'BUS_5',
    name: 'MANIKPARA',
    areas: [
      {
        name: 'MANIKPARA',
        fare: 1800,
        pickupPoints: [
          { value: 'MANIKPARA_KUSUM_GHATI', label: 'MANIKPARA KUSUM-GHATI' },
          { value: 'MANIKPARA_BEMLEY_MORE', label: 'MANIKPARA BEMLEY MORE' },
          { value: 'MANIKPARA_BHUIYA_HARDWARE', label: 'MANIKPARA BHUIYA HARDWARE' },
          { value: 'MANIKPARA_MANSA_HOTEL', label: 'MANIKPARA MANSA HOTEL' },
          { value: 'MANIKPARA_RAM_MANDIR', label: 'MANIKPARA RAM MANDIR' },
          { value: 'MANIKPARA_PALL', label: 'MANIKPARA PALL' },
          { value: 'MANIKPARA_BUS_STAND', label: 'MANIKPARA BUS STAND' },
          { value: 'MANIKPARA_VIVEKANAND_MORE', label: 'MANIKPARA VIVEKANAND MORE' },
          { value: 'MANIKPARA_COLLEGE', label: 'MANIKPARA COLLEGE' }
        ]
      },
      {
        name: 'KHEMASULI',
        fare: 1300,
        pickupPoints: [
          { value: 'KHEMASULI', label: 'KHEMASULI' }
        ]
      },
      {
        name: 'KALAIKUNDA',
        fare: 900,
        pickupPoints: [
          { value: 'KALIAKUNDA', label: 'KALIAKUNDA' },
          { value: 'GAIDUA_MORE', label: 'GAIDUA MORE' },
          { value: 'KALIMANDIR', label: 'KALIMANDIR' }
        ]
      }
    ]
  },

  // BUS NO. 7
  {
    id: 'BUS_7',
    name: 'ATULMONI',
    areas: [
      {
        name: 'ATULMONI',
        fare: 900,
        pickupPoints: [
          { value: 'PREM_HARI_BAVAN', label: 'PREM HARI BAVAN' },
          { value: 'ATULMONI', label: 'ATULMONI' }
        ]
      },
      {
        name: 'MALANCHA',
        fare: 800,
        pickupPoints: [
          { value: 'RINA_BAG_CENTRE', label: 'RINA BAG CENTRE' },
          { value: 'SAMANTA_NURSING_HOME', label: 'SAMANTA NURSING HOME' },
          { value: 'LAL_BANGLOW', label: 'LAL BANGLOW' }
        ]
      }
    ]
  },

  // BUS NO. 10
  {
    id: 'BUS_10',
    name: 'DEBRA',
    areas: [
      {
        name: 'DEBRA',
        fare: 2300,
        pickupPoints: [
          { value: 'DALAPATI_PUR', label: 'DALAPATI PUR' },
          { value: 'DHAMTORE', label: 'DHAMTORE' },
          { value: 'BALICHAK_RAIL_GATE', label: 'BALICHAK RAIL GATE' },
          { value: 'KON_MORE', label: 'KON MORE' },
          { value: 'GANGA_RICE_MILL', label: 'GANGA RICE MILL' },
          { value: 'PAPER_MILL', label: 'PAPER MILL' },
          { value: 'DEBRA_HOSPITAL', label: 'DEBRA HOSPITAL' },
          { value: 'DEBRA', label: 'DEBRA' }
        ]
      },
      {
        name: 'BURAMALA',
        fare: 1900,
        pickupPoints: [
          { value: 'BURAMALA', label: 'BURAMALA' }
        ]
      },
      {
        name: 'RUPNARAYAN PUR',
        fare: 1350,
        pickupPoints: [
          { value: 'RUPNARAYAN_PUR', label: 'RUPNARAYAN PUR' }
        ]
      },
      {
        name: 'VALIPUR',
        fare: 900,
        pickupPoints: [
          { value: 'VALIPUR', label: 'VALIPUR' },
          { value: 'BHABANIPUR', label: 'BHABANIPUR' },
          { value: 'BORGAI', label: 'BORGAI' }
        ]
      },
      {
        name: 'SAHA CHOWK',
        fare: 600,
        pickupPoints: [
          { value: 'TALTOLA', label: 'TALTOLA(COSMOCITY)' },
          { value: 'COSMOCITY', label: 'COSMOCITY' }
        ]
      }
    ]
  },

  // BUS NO. 12
  {
    id: 'BUS_12',
    name: 'GOKULPUR',
    areas: [
      {
        name: 'GOKULPUR',
        fare: 900,
        pickupPoints: [
          { value: 'GOKULPUR_PURBO_AMBA', label: 'GOKULPUR PURBO AMBA' },
          { value: 'GOKULPUR_PASCHIM_AMBA', label: 'GOKULPUR PASCHIM AMBA' },
          { value: 'JOGAI', label: 'JOGAI' },
          { value: 'TATA_METALLIKS_GATE3', label: 'TATA METALLIKS GATE-3' },
          { value: 'JHATI_BANDH', label: 'JHATI BANDH' },
          { value: 'NARAYANPUR', label: 'NARAYANPUR' },
          { value: 'RISHA', label: 'RISHA' }
        ]
      }
    ]
  },

  // BUS NO. 14
  {
    id: 'BUS_14',
    name: 'KHARIDA',
    areas: [
      {
        name: 'KHARIDA',
        fare: 1000,
        pickupPoints: [
          { value: 'MILONI_CINEMA', label: 'MILONI CINEMA(KALI MANDIR)' },
          { value: 'RELAXO', label: 'RELAXO' }
        ]
      }
    ]
  },

  // BUS NO. 17
  {
    id: 'BUS_17',
    name: 'MALANCHA',
    areas: [
      {
        name: 'MALANCHA',
        fare: 800,
        pickupPoints: [
          { value: 'PARIJAT_SWEETS', label: 'PARIJAT SWEETS' },
          { value: 'KALAI_MATA_SWEETS', label: 'KALAI MATA SWEETS' },
          { value: 'RAJ_LAXMI_SWEETS', label: 'RAJ LAXMI SWEETS' },
          { value: 'MALANCHA_BAZAR_LINE', label: 'MALANCHA BAZAR LINE' },
          { value: 'BSNL_MODE', label: 'BSNL MODE' },
          { value: 'MALANCHA_PETROL_PUMP', label: 'MALANCHA PETROL PUMP' }
        ]
      }
    ]
  },

  // BUS NO. 19
  {
    id: 'BUS_19',
    name: 'SAHA CHOWK',
    areas: [
      {
        name: 'SAHA CHOWK',
        fare: 600,
        pickupPoints: [
          { value: 'GAS_GODOWN', label: 'GAS GODOWN' },
          { value: 'SHIV_MANDIR', label: 'SHIV MANDIR' }
        ]
      },
      {
        name: 'MALANCHA',
        fare: 800,
        pickupPoints: [
          { value: 'POSORA', label: 'POSORA' },
          { value: 'BHIM_CHOWK', label: 'BHIM CHOWK' },
          { value: 'SEN_CHOWK', label: 'SEN CHOWK' }
        ]
      },
      {
        name: 'NIMPURA',
        fare: 700,
        pickupPoints: [
          { value: 'GOLDEN_PETAL_SCHOOL', label: 'GOLDEN PETAL SCHOOL' },
          { value: 'NIMPURA_GURDWARA', label: 'NIMPURA GURDWARA' }
        ]
      }
    ]
  },

  // BUS NO. 21
  {
    id: 'BUS_21',
    name: 'BULBULCHATI',
    areas: [
      {
        name: 'BULBULCHATI',
        fare: 1300,
        pickupPoints: [
          { value: 'JAPETAPUR', label: 'JAPETAPUR' },
          { value: 'BULBUL_CHATI', label: 'BULBUL CHATI' },
          { value: 'PANA_CHATRA', label: 'PANA CHATRA' }
        ]
      },
      {
        name: 'SIRSHI',
        fare: 1800,
        pickupPoints: [
          { value: 'SIRSHI', label: 'SIRSHI' }
        ]
      },
      {
        name: 'KOUSHALLYA MODE',
        fare: 1300,
        pickupPoints: [
          { value: 'KOUSHALLYA_MODE', label: 'KOUSHALLYA MODE' }
        ]
      },
      {
        name: 'PURATAN BAZAR',
        fare: 1200,
        pickupPoints: [
          { value: 'PURATAN_BAZAR', label: 'PURATAN BAZAR' },
          { value: 'SEMI_GATE', label: 'SEMI GATE' }
        ]
      },
      {
        name: 'NIMPURA',
        fare: 700,
        pickupPoints: [
          { value: 'NIMPURA', label: 'NIMPURA' }
        ]
      }
    ]
  },

  // BUS NO. 23
  {
    id: 'BUS_23',
    name: 'GOLE BAZAR',
    areas: [
      {
        name: 'GOLE BAZAR',
        fare: 1100,
        pickupPoints: [
          { value: 'FISH_MARKET', label: 'FISH MARKET' },
          { value: 'MUSLIN', label: 'MUSLIN' },
          { value: 'CO_OPERATIVE', label: 'CO-OPERATIVE' },
          { value: 'SUBHAS_PALLY', label: 'SUBHAS PALLY' }
        ]
      },
      {
        name: 'NIMPURA',
        fare: 700,
        pickupPoints: [
          { value: 'NIMPURA_PETROL_PUMP', label: 'NIMPURA PETROL PUMP' }
        ]
      }
    ]
  },

  // BUS NO. 25
  {
    id: 'BUS_25',
    name: 'KHARIDA',
    areas: [
      {
        name: 'KHARIDA',
        fare: 1000,
        pickupPoints: [
          { value: 'GIRI_MAIDAN', label: 'GIRI MAIDAN' },
          { value: 'ATUL_MEDICAL', label: 'ATUL MEDICAL' },
          { value: 'KHARIDA_GATE', label: 'KHARIDA GATE' },
          { value: 'KHARIDA_HANUMAN_MANDIR', label: 'KHARIDA HANUMAN MANDIR' },
          { value: 'CLOCK_TOWER', label: 'CLOCK TOWER' },
          { value: 'HITKARNI_SCHOOL', label: 'HITKARNI SCHOOL' },
          { value: 'STAR_LODGE', label: 'STAR LODGE' },
          { value: 'MILONI_CINEMA', label: 'MILONI CINEMA' }
        ]
      }
    ]
  },

  // BUS NO. 27
  {
    id: 'BUS_27',
    name: 'HATIHALKA',
    areas: [
      {
        name: 'HATIHALKA',
        fare: 1700,
        pickupPoints: [
          { value: 'HATIHALKA', label: 'HATIHALKA' }
        ]
      },
      {
        name: 'SATKUI',
        fare: 1350,
        pickupPoints: [
          { value: 'SATKUI', label: 'SATKUI' }
        ]
      },
      {
        name: 'VALIPUR',
        fare: 900,
        pickupPoints: [
          { value: 'VALIPUR', label: 'VALIPUR' }
        ]
      }
    ]
  },

  // BUS NO. 29
  {
    id: 'BUS_29',
    name: 'MEDINIPUR',
    areas: [
      {
        name: 'KERANICHATI',
        fare: 2400,
        pickupPoints: [
          { value: 'KERANICHATI', label: 'KERANICHATI' }
        ]
      },
      {
        name: 'MEDINIPUR',
        fare: 2300,
        pickupPoints: [
          { value: 'FIRE_BRIGADE_SEPAI_BAZAR', label: 'FIRE BRIGADE SEPAI BAZAR' },
          { value: 'GOL_KUWA', label: 'GOL KUWA' },
          { value: 'NANNUR_CHAK', label: 'NANNUR CHAK' },
          { value: 'RANGA_MATI', label: 'RANGA MATI' },
          { value: 'KERNATITOLA', label: 'KERNATITOLA' },
          { value: 'DEWAN_BABA_CHAK', label: 'DEWAN BABA CHAK' },
          { value: 'JUDGE_COURT', label: 'JUDGE COURT' },
          { value: 'MUSLIM_KUTI', label: 'MUSLIM KUTI' },
          { value: 'PATNA_BAZAR', label: 'PATNA BAZAR' },
          { value: 'JAGANNATH_MANDIR', label: 'JAGANNATH MANDIR' },
          { value: 'NUTUN_BAZAR', label: 'NUTUN BAZAR' }
        ]
      }
    ]
  },

  // BUS NO. 31
  {
    id: 'BUS_31',
    name: 'MALANCHA',
    areas: [
      {
        name: 'MALANCHA',
        fare: 800,
        pickupPoints: [
          { value: 'BATA_SHOW_ROOM', label: 'BATA SHOW ROOM' },
          { value: 'PRAJAPATI_GHAR', label: 'PRAJAPATI GHAR' },
          { value: 'ATUL_MEDICAL', label: 'ATUL MEDICAL' },
          { value: 'BISCUIT_FACTORY', label: 'BISCUIT FACTORY' },
          { value: 'WATER_TANK', label: 'WATER TANK' },
          { value: 'USHA_NURSHING_HOME', label: 'USHA NURSHING HOME' },
          { value: 'MATA_MANDIR', label: 'MATA MANDIR' },
          { value: 'HARDWARE_STORE', label: 'HARDWARE STORE' },
          { value: 'SEN_CHOWK', label: 'SEN CHOWK' }
        ]
      }
    ]
  },

  // BUS NO. 33
  {
    id: 'BUS_33',
    name: 'NIMPURA',
    areas: [
      {
        name: 'NIMPURA',
        fare: 700,
        pickupPoints: [
          { value: 'NATIONAL_HARDWARE_STORE', label: 'NATIONAL HARDWARE STORE' },
          { value: 'GOLDEN_PETAL_SCHOOL', label: 'GOLDEN PETAL SCHOOL' },
          { value: 'ANALOG_DIGITAL_COMPUTERS', label: 'ANALOG & DIGITAL COMPUTERS' },
          { value: 'NIMPURA_GURUDWARA', label: 'NIMPURA GURUDWARA' },
          { value: 'NIMPURA_ELECTRIC_TRANSFORM', label: 'NIMPURA ELECTRIC TRANSFORM' }
        ]
      }
    ]
  },

  // BUS NO. 35
  {
    id: 'BUS_35',
    name: 'KALAIKUNDA',
    areas: [
      {
        name: 'KALAIKUNDA',
        fare: 900,
        pickupPoints: [
          { value: 'ASHU_CAMP_GATE', label: 'ASHU CAMP GATE' },
          { value: 'BANKATHI', label: 'BANKATHI' },
          { value: 'KKD_STATION', label: 'KKD STATION' },
          { value: 'KKD_BRIDGE', label: 'KKD BRIDGE' },
          { value: 'KKD_CIVIL_COMPLEX', label: 'KKD CIVIL COMPLEX' },
          { value: 'KKD_GATE_NO2', label: 'KKD GATE NO-2' },
          { value: 'KKD_PNB_ATM', label: 'KKD PNB ATM' },
          { value: 'KKD_KV01', label: 'KKD KV-01' },
          { value: 'KKD_CEMENT_GODOWN', label: 'KKD. CEMENT GODOWN' }
        ]
      }
    ]
  }
];

// Helper Functions
export const getPickupPoints = (busRouteId: string): PickupPoint[] => {
  const route = busRoutes.find(r => r.id === busRouteId);
  if (!route) return [];
  return route.areas.flatMap(area => area.pickupPoints);
};

export const getFare = (busRouteId: string, pickupPoint: string): number => {
  const route = busRoutes.find(r => r.id === busRouteId);
  if (!route) return 0;

  for (const area of route.areas) {
    if (area.pickupPoints.some(p => p.value === pickupPoint)) {
      return area.fare;
    }
  }
  return 0;
};