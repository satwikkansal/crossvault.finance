export const vaultConfig = [
  {
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3',
    displayName: 'USDC Aave-v3 Arbitrum',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004822104823891',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.02050050447556238,
      net_apy: 0.0004004822104823891,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004822104823891,
        month_ago: 0.0028633503086699097,
        inception: 0.03940615636322864,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
    DEPOSIT: {
      userBalance: '0',
      userDeposited: '0',
      userDepositedUsdc: '0',
    },
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '99589',
      balanceUsdc: '99589',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {
        vaults: true,
      },
    },
  },
  {
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3',
    displayName: 'USDC Aave-v3 FTM',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004822104823891',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.02050050447556238,
      net_apy: 0.0004004822104823891,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004822104823891,
        month_ago: 0.0028633503086699097,
        inception: 0.03940615636322864,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
    DEPOSIT: {
      userBalance: '0',
      userDeposited: '0',
      userDepositedUsdc: '0',
    },
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '99589',
      balanceUsdc: '99589',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {
        vaults: true,
      },
    },
  },
  {
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3',
    displayName: 'USDC Aave-v3 AVAX',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004822104823891',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.02050050447556238,
      net_apy: 0.0004004822104823891,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004822104823891,
        month_ago: 0.0028633503086699097,
        inception: 0.03940615636322864,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
    DEPOSIT: {
      userBalance: '0',
      userDeposited: '0',
      userDepositedUsdc: '0',
    },
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '99589',
      balanceUsdc: '99589',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {
        vaults: true,
      },
    },
  },
];

export const vaultFilterConfig = [
  {
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '0',
      balanceUsdc: '0',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {},
    },
    userBalance: '0',
    userDeposited: '0',
    userDepositedUsdc: '0',
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3 Arbitrum',
    displayName: 'USDC',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004813879399105',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.020500503447780077,
      net_apy: 0.0004004813879399105,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004813879399105,
        month_ago: 0.0028641842859871147,
        inception: 0.03942222252985328,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
  },
  {
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '0',
      balanceUsdc: '0',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {},
    },
    userBalance: '0',
    userDeposited: '0',
    userDepositedUsdc: '0',
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3 FTM',
    displayName: 'USDC',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004813879399105',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.020500503447780077,
      net_apy: 0.0004004813879399105,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004813879399105,
        month_ago: 0.0028641842859871147,
        inception: 0.03942222252985328,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
  },
  {
    token: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
      balance: '0',
      balanceUsdc: '0',
      priceUsdc: '1000000',
      categories: ['USD Stablecoin'],
      description:
        'USD Coin is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.',
      website: 'https://www.circle.com/en/usdc',
      isZapable: false,
      sourceIsZapper: false,
      allowancesMap: {},
      supported: {},
    },
    userBalance: '0',
    userDeposited: '0',
    userDepositedUsdc: '0',
    address: '0xEF0210eB96c7EB36AF8ed1c20306462764935607',
    name: 'USDC Aave-v3 AVAX',
    displayName: 'USDC',
    displayIcon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/250/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/logo-128.png',
    defaultDisplayToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    vaultBalance: '0',
    decimals: '6',
    symbol: 'waUSDC',
    vaultBalanceUsdc: '0',
    depositLimit: '500000000000000',
    emergencyShutdown: false,
    depositsDisabled: false,
    withdrawalsDisabled: false,
    hideIfNoDeposits: false,
    apyData: '0.0004004813879399105',
    apyType: 'v2:averaged',
    apyMetadata: {
      type: 'v2:averaged',
      gross_apr: 0.020500503447780077,
      net_apy: 0.0004004813879399105,
      fees: {
        performance: 0.2,
        withdrawal: null,
        management: 0.02,
        keep_crv: null,
        cvx_keep_crv: null,
      },
      points: {
        week_ago: 0.0004004813879399105,
        month_ago: 0.0028641842859871147,
        inception: 0.03942222252985328,
      },
      composite: null,
    },
    allowancesMap: {},
    approved: false,
    pricePerShare: '1042519',
    earned: '0',
    strategies: [
      {
        address: '0x4E91a43190B90E0B6A19d6a94D4b664d4b56F61C',
        name: 'Scream Folding',
        description:
          'Supplies and borrows USDC on [Scream v2](http://scream.sh) simultaneously to earn SCREAM. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['Scream'],
      },
      {
        address: '0xEEbB0577C33ca0167047Be543B5d56AF1C7221ff',
        name: 'Curve Yield Seeker',
        description:
          'Supplies USDC to [Curve Finance](https://ftm.curve.fi) to earn CRV. Earned tokens are harvested, sold for more USDC which is deposited back into the strategy.',
        protocols: ['CurveFinance'],
      },
    ],
    historicalEarnings: [],
    allowZapIn: false,
    allowZapOut: false,
    migrationAvailable: false,
  },
];
