// ===== BASE DE DADOS COMPLETA - BULBE SMART HOME =====
const PRODUTOS_DB = [
    
    // ========== 1. LÂMPADAS INTELIGENTES (8 produtos) ==========
    {
        id: 1,
        nome: "Avant Neo LED Smart 10W RGB",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada inteligente com controle via app Avant NEO, compatível com Alexa e Google Home. Permite criar cenários personalizados, agendamento e controle de intensidade. Ideal para ambientes internos como quartos, salas e escritórios.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Fluxo: 810 lumens<br>• Soquete: E27<br>• Voltagem: Bivolt (100-240V)<br>• Conectividade: WiFi 2.4GHz<br>• Cores: 16 milhões (RGB)<br>• Temperatura: 2700K-6500K",
        preco: 35.00,
        precoAntigo: 41.18,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/AvantNeo/AvantNeo1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/AvantNeo/AvantNeo1.jpg",
            "assets/images/imagensProdutos/lampadas/AvantNeo/AvantNeo2.jpg",
            "assets/images/imagensProdutos/lampadas/AvantNeo/AvantNeo3.jpg"
        ],
        avaliacao: 4.3,
        totalAvaliacoes: 128,
        destaque: true,
        maisVendido: true,
        categoriaHome: "lampadas"
    },
    {
        id: 2,
        nome: "Elgin Smart Color 10W",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada com capacidade de automação de rotinas, permite simular presença em casa. Controle por voz via Alexa ou Google Assistente. Consumo reduzido de energia, ideal para criar climas apropriados para trabalho, estudo ou descanso.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: RGB + branco<br>• App: Elgin Smart<br>• IRC: >80",
        preco: 45.00,
        precoAntigo: 52.94,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/elginSmart10w/ElginSmart10w1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/elginSmart10w/ElginSmart10w1.jpg",
            "assets/images/imagensProdutos/lampadas/elginSmart10w/ElginSmart10w2.jpg",
            "assets/images/imagensProdutos/lampadas/elginSmart10w/ElginSmart10w3.jpg"
        ],
        avaliacao: 4.2,
        totalAvaliacoes: 95,
        destaque: true,
        maisVendido: true,
        categoriaHome: "lampadas"
    },
    {
        id: 3,
        nome: "Elgin Smart Color 30W",
        categoria: "Lampadas Inteligentes",
        descricao: "Versão de maior potência para ambientes maiores. Programação de rotinas de ativação, controle de cores e intensidade. Conexão WiFi direta com controle remoto pelo aplicativo ou comandos de voz.<br><br><strong>Especificações:</strong><br>• Potência: 30W<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: RGB + branco<br>• App: Elgin Smart<br>• Controle: Voz e app",
        preco: 72.00,
        precoAntigo: 84.71,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/elginSmart30w/ElginSmart30w1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/elginSmart30w/ElginSmart30w1.jpg",
            "assets/images/imagensProdutos/lampadas/elginSmart30w/ElginSmart30w2.jpg",
            "assets/images/imagensProdutos/lampadas/elginSmart30w/ElginSmart30w3.jpg"
        ],
        avaliacao: 4.1,
        totalAvaliacoes: 67,
        destaque: false,
        maisVendido: true,
        categoriaHome: "lampadas"
    },
    {
        id: 4,
        nome: "Intelbras EWS 410",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada inteligente com app Izy Smart. Permite controle e programação de iluminação com interface intuitiva. Fácil instalação e configuração, ideal para iniciantes em automação residencial.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• App: Izy Smart<br>• Compatibilidade: Alexa, Google",
        preco: 58.00,
        precoAntigo: 68.24,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/intelbrasEWS410/IntelbrasEWS1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/intelbrasEWS410/IntelbrasEWS1.jpg",
            "assets/images/imagensProdutos/lampadas/intelbrasEWS410/IntelbrasEWS2.png",
            "assets/images/imagensProdutos/lampadas/intelbrasEWS410/IntelbrasEWS2.jpg"
        ],
        avaliacao: 4.4,
        totalAvaliacoes: 112,
        destaque: true,
        maisVendido: false,
        categoriaHome: "lampadas"
    },
    {
        id: 5,
        nome: "Positivo Smart Lâmpada Wi-Fi 10W",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada brasileira com fácil instalação sem necessidade de hub. Controle via app ou comandos de voz (Alexa/Google). Agendamento de horários, criação de cenas e integração com outros dispositivos Positivo.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Fluxo: 806 lumens<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi 2.4GHz<br>• Cores: RGB + branco<br>• App: Positivo Casa Inteligente",
        preco: 109.00,
        precoAntigo: 128.24,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/philipsHue/PhilipsHue1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/philipsHue/PhilipsHue1.jpg",
            "assets/images/imagensProdutos/lampadas/philipsHue/PhilipsHue2.jpg",
            "assets/images/imagensProdutos/lampadas/philipsHue/PhilipsHue3.jpg"
        ],
        avaliacao: 4.2,
        totalAvaliacoes: 89,
        destaque: false,
        maisVendido: false,
        categoriaHome: "lampadas"
    },
    {
        id: 6,
        nome: "Xiaomi Mi LED Smart Bulb",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada com design elegante e dissipação eficiente de calor. App Mi Home permite definir horários, cronômetros e integração com outros dispositivos Xiaomi. Compatível com Alexa e Google Assistente.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Fluxo: 800 lumens<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• App: Mi Home<br>• Cores: RGB + temperatura ajustável",
        preco: 89.00,
        precoAntigo: 104.71,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/positivoSmart/PositivoSmart1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/positivoSmart/PositivoSmart1.jpg",
            "assets/images/imagensProdutos/lampadas/positivoSmart/PositivoSmart2.jpg",
            "assets/images/imagensProdutos/lampadas/positivoSmart/PositivoSmart3.jpg"
        ],
        avaliacao: 4.5,
        totalAvaliacoes: 156,
        destaque: true,
        maisVendido: true,
        categoriaHome: "lampadas"
    },
    {
        id: 7,
        nome: "Tramontina Smart LED 10W",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada com conexão híbrida WiFi e Bluetooth. Controle por app gratuito ou comandos de voz. 16 milhões de cores para personalização completa do ambiente. Instalação simples e intuitiva.<br><br><strong>Especificações:</strong><br>• Potência: 10W<br>• Soquete: E27<br>• Voltagem: Bivolt<br>• Conectividade: WiFi + Bluetooth<br>• Cores: 16 milhões<br>• App: T Smart<br>• Compatibilidade: Alexa, Google, Siri",
        preco: 79.00,
        precoAntigo: 92.94,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/tramontinaSmart/TramontinaLed1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/tramontinaSmart/TramontinaLed1.jpg",
            "assets/images/imagensProdutos/lampadas/tramontinaSmart/TramontinaLed2.jpg",
            "assets/images/imagensProdutos/lampadas/tramontinaSmart/TramontinaLed3.jpg"
        ],
        avaliacao: 4.3,
        totalAvaliacoes: 78,
        destaque: false,
        maisVendido: false,
        categoriaHome: "lampadas"
    },
    {
        id: 8,
        nome: "Philips Hue White and Color E27",
        categoria: "Lampadas Inteligentes",
        descricao: "Lâmpada premium com iluminação superior e cores vibrantes. Compatível com Alexa, Google Home, Apple HomeKit. App completo com cenas predefinidas e sincronização com TV/música. Requer Hue Bridge para recursos completos.<br><br><strong>Especificações:</strong><br>• Potência: 9W<br>• Fluxo: 806 lumens<br>• Soquete: E27<br>• Voltagem: 220V ou 127V<br>• Conectividade: Zigbee (requer Bridge)<br>• Cores: 16 milhões<br>• App: Philips Hue",
        preco: 359.00,
        precoAntigo: 422.35,
        desconto: 15,
        imagem: "assets/images/imagensProdutos/lampadas/xiaomiLedSmart/XiaomiLed1.jpg",
        imagemDetalhes: [
            "assets/images/imagensProdutos/lampadas/xiaomiLedSmart/XiaomiLed1.jpg",
            "assets/images/imagensProdutos/lampadas/xiaomiLedSmart/XiaomiLed2.png",
            "assets/images/imagensProdutos/lampadas/xiaomiLedSmart/XiaomiLed3.jpg"
        ],
        avaliacao: 4.7,
        totalAvaliacoes: 234,
        destaque: true,
        maisVendido: false,
        categoriaHome: "lampadas"
    },

    // ========== 2. LUMINÁRIAS INTELIGENTES (8 produtos) ==========
    {
        id: 9,
        nome: "Positivo Smart Luminária de Mesa Wi-Fi",
        categoria: "Luminarias Inteligentes",
        descricao: "Luminária de mesa com modo de vibração de cores ao ritmo da música. Controle via app Positivo Casa Inteligente. Design moderno e portátil, ideal para quartos e escritórios. Comando de voz via Alexa.<br><br><strong>Especificações:</strong><br>• Potência: 7W<br>• Fluxo: 400 lumens<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: RGB + branco<br>• Função: Ritmo musical<br>• Dimensões: Portátil",
        preco: 179.00,
        precoAntigo: 210.59,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/luminaria-mesa.png",
        avaliacao: 4.1,
        totalAvaliacoes: 67,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 10,
        nome: "Xiaomi Mi Bedside Lamp 2",
        categoria: "Luminarias Inteligentes",
        descricao: "Luminária de cabeceira premium com sincronização com Mi Band. Desligamento automático ao detectar sono profundo. Modos Sleep Timer e Wake Up. Design compacto e elegante. Controle por toque ou app.<br><br><strong>Especificações:</strong><br>• Potência: LED integrado<br>• Fluxo luminoso: Ajustável<br>• Conectividade: WiFi, Bluetooth<br>• Cores: RGB + branco<br>• App: Mi Home<br>• Dimensões: 5.9x5.9x9.8cm<br>• Peso: 1kg",
        preco: 399.00,
        precoAntigo: 469.41,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/luminaria-xiaomi.png",
        avaliacao: 4.8,
        totalAvaliacoes: 189,
        destaque: true,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 11,
        nome: "Elsys Luminária Cilíndrica Smart",
        categoria: "Luminarias Inteligentes",
        descricao: "Luminária cilíndrica minimalista com 4 botões físicos. Controle de cor, intensidade e timer. App próprio compatível com Alexa e Google Assistente. Tons frio, quente e neutro disponíveis.<br><br><strong>Especificações:</strong><br>• Potência: LED integrado<br>• Fluxo: 400 lumens<br>• Voltagem: Bivolt (microUSB)<br>• Conectividade: WiFi 2.4GHz<br>• Cores: 16 milhões RGB<br>• Vida útil: 30.000h<br>• Dimensões: 21x10cm",
        preco: 359.00,
        precoAntigo: 422.35,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/luminaria-cilindrica.png",
        avaliacao: 4.3,
        totalAvaliacoes: 91,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 12,
        nome: "Geonav Hi Luminária Inteligente",
        categoria: "Luminarias Inteligentes",
        descricao: "Luminária com conexão híbrida para configuração rápida. Compatível com Alexa e Google Assistente. Controle de temperatura de cor e intensidade. Design moderno para decoração contemporânea.<br><br><strong>Especificações:</strong><br>• Potência: LED integrado<br>• Conectividade: WiFi + Bluetooth<br>• Voltagem: Bivolt<br>• Cores: RGB + branco<br>• Temperaturas: Frio/Quente<br>• App: Hi by Geonav",
        preco: 249.00,
        precoAntigo: 292.94,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/luminaria-geonav.png",
        avaliacao: 4.2,
        totalAvaliacoes: 73,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 13,
        nome: "Elgin Plafon Smart Quadrado 24W",
        categoria: "Luminarias Inteligentes",
        descricao: "Plafon inteligente para instalação em teto. Ideal para salas e cozinhas. Controle via Elgin Smart app. Programação de horários e criação de cenários. Alta luminosidade para ambientes amplos.<br><br><strong>Especificações:</strong><br>• Potência: 24W<br>• Tipo: Plafon para embutir<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Temperatura: 3000K-6500K<br>• Formato: Quadrado<br>• RGB: Sim",
        preco: 189.00,
        precoAntigo: 222.35,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/plafon.png",
        avaliacao: 4.4,
        totalAvaliacoes: 134,
        destaque: true,
        maisVendido: true,
        categoriaHome: "luminarias"
    },
    {
        id: 14,
        nome: "Elgin Ecospot Smart 5W Quadrado",
        categoria: "Luminarias Inteligentes",
        descricao: "Spot inteligente para instalação embutida. Perfeito para iluminação pontual e decorativa. Controle de cores RGB e temperatura. Compatível com Alexa e Google Home. Economia de energia.<br><br><strong>Especificações:</strong><br>• Potência: 5W<br>• Tipo: Spot embutir<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Temperatura: 3000K-6500K RGB<br>• Formato: Quadrado compacto",
        preco: 95.00,
        precoAntigo: 111.76,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/spot.png",
        avaliacao: 4.3,
        totalAvaliacoes: 82,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 15,
        nome: "AGL Abajur LED WiFi RGB",
        categoria: "Luminarias Inteligentes",
        descricao: "Abajur inteligente com mudança de cor por ritmo musical. Controle de intensidade e escolha entre milhões de cores. Design moderno e funcional. App Tuya Smart para configuração fácil.<br><br><strong>Especificações:</strong><br>• Potência: LED integrado<br>• Conectividade: WiFi<br>• Cores: RGBW<br>• Compatibilidade: Alexa, Google, Tuya<br>• Função: Ritmo musical<br>• Controle: App e voz",
        preco: 149.00,
        precoAntigo: 175.29,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/abajur.png",
        avaliacao: 4.1,
        totalAvaliacoes: 56,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },
    {
        id: 16,
        nome: "Ekaza Luminária SmartLife",
        categoria: "Luminarias Inteligentes",
        descricao: "Luminária versátil com eficiência energética. Personalização de luz e temperatura de cor. Controle remoto via app SmartLife. Integração completa com assistentes virtuais.<br><br><strong>Especificações:</strong><br>• Potência: LED integrado<br>• Conectividade: WiFi<br>• Voltagem: Bivolt<br>• Cores: RGB + branco<br>• App: SmartLife<br>• Compatibilidade: Alexa, Google Home",
        preco: 159.00,
        precoAntigo: 187.06,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/luminaria-ekaza.png",
        avaliacao: 4.0,
        totalAvaliacoes: 48,
        destaque: false,
        maisVendido: false,
        categoriaHome: "luminarias"
    },

    // ========== 3. FITAS LED INTELIGENTES (8 produtos) ==========
    {
        id: 17,
        nome: "Positivo Smart Fita LED RGB 3m",
        categoria: "Fitas LED",
        descricao: "Fita LED de 2ª geração com cores vibrantes. Controle via app ou comandos de voz (Alexa/Google). Instalação fácil com adesivo incluso. Ideal para iluminação indireta e decorativa.<br><br><strong>Especificações:</strong><br>• Comprimento: 3 metros<br>• Potência: 14W<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: 16 milhões + branco<br>• App: Positivo Casa Inteligente<br>• Adesivo: Incluso",
        preco: 259.00,
        precoAntigo: 304.71,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.2,
        totalAvaliacoes: 98,
        destaque: true,
        maisVendido: true,
        categoriaHome: "fitas"
    },
    {
        id: 18,
        nome: "Elgin Fita LED Smart 5m",
        categoria: "Fitas LED",
        descricao: "Fita LED de 5 metros com proteção IP44. Controle via app Elgin Smart. Compatível com Alexa e Google Home. Instalação versátil para móveis, espelhos e paredes.<br><br><strong>Especificações:</strong><br>• Comprimento: 5 metros<br>• Potência: 20W<br>• Temperatura: 3000K-6500K<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: RGB<br>• Proteção: IP44",
        preco: 279.00,
        precoAntigo: 328.24,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.3,
        totalAvaliacoes: 112,
        destaque: true,
        maisVendido: false,
        categoriaHome: "fitas"
    },
    {
        id: 19,
        nome: "Tramontina Smart Fita LED RGB 3m",
        categoria: "Fitas LED",
        descricao: "Fita LED com 16 milhões de cores. Controle por celular via app T Smart ou comandos de voz (Alexa, Google, Siri). Adesivo 3M para instalação flexível. Personalização completa do ambiente.<br><br><strong>Especificações:</strong><br>• Comprimento: 3 metros<br>• Potência: 4W/m (12W total)<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: 16 milhões<br>• App: T Smart<br>• IRC: >80",
        preco: 189.00,
        precoAntigo: 222.35,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.4,
        totalAvaliacoes: 127,
        destaque: false,
        maisVendido: true,
        categoriaHome: "fitas"
    },
    {
        id: 20,
        nome: "Geonav Hi Fita LED 3m RGB",
        categoria: "Fitas LED",
        descricao: "Fita LED com proteção IP65 contra água. Conexão híbrida WiFi e Bluetooth. Alta luminosidade de 1650 lumens. Compatível com Alexa e Google Assistente. Dimerizável e versátil.<br><br><strong>Especificações:</strong><br>• Comprimento: 3 metros<br>• Potência: 12W<br>• Fluxo: 1650 lumens<br>• Voltagem: Bivolt<br>• Conectividade: WiFi + Bluetooth<br>• Cores: RGB + branco<br>• Proteção: IP65",
        preco: 219.00,
        precoAntigo: 257.65,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.3,
        totalAvaliacoes: 85,
        destaque: false,
        maisVendido: false,
        categoriaHome: "fitas"
    },
    {
        id: 21,
        nome: "TP-Link Tapo L920-5 RGB",
        categoria: "Fitas LED",
        descricao: "Fita LED endereçável 20% mais brilhante. Durabilidade 50% maior que produtos comuns. Controle via app Tapo com cenas predefinidas. Instalação flexível com cortes personalizados.<br><br><strong>Especificações:</strong><br>• Comprimento: 5 metros<br>• Conectividade: WiFi<br>• Cores: 16 milhões<br>• Voltagem: Bivolt<br>• App: Tapo<br>• Compatibilidade: Alexa, Google, Apple<br>• Brilho: 20% superior",
        preco: 299.00,
        precoAntigo: 351.76,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.6,
        totalAvaliacoes: 178,
        destaque: true,
        categoriaHome: "fitas"
    },
    {
        id: 22,
        nome: "Nova Digital Fita LED 5m Smart",
        categoria: "Fitas LED",
        descricao: "Fita LED de 5 metros com estrutura flexível. Controle por app ou assistentes virtuais. Instalação facilitada com adesivo. Ideal para decoração de ambientes e iluminação indireta.<br><br><strong>Especificações:</strong><br>• Comprimento: 5 metros<br>• Potência: 12.4W<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• Cores: RGB<br>• App: Tuya/SmartLife<br>• Estrutura: Flexível",
        preco: 132.00,
        precoAntigo: 155.29,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.1,
        totalAvaliacoes: 64,
        destaque: false,
        categoriaHome: "fitas"
    },
    {
        id: 23,
        nome: "AGL Fita LED RGB 5m WiFi",
        categoria: "Fitas LED",
        descricao: "Fita LED com 60 LEDs por metro. Marcação de corte para ajuste personalizado. Controle via app com Alexa e Google Home. Adesivo dupla face incluso. Boa relação custo-benefício.<br><br><strong>Especificações:</strong><br>• Comprimento: 5 metros<br>• Potência: 8W<br>• LEDs: 60 LEDs/metro<br>• Temperatura: 3000K-6500K RGB<br>• Conectividade: WiFi<br>• Voltagem: Bivolt<br>• Marcação: Corte a cada 5cm",
        preco: 115.00,
        precoAntigo: 135.29,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.3,
        totalAvaliacoes: 93,
        destaque: false,
        categoriaHome: "fitas"
    },

    // ========== 4. ACESSÓRIOS DE CONTROLE (8 produtos) ==========
    {
        id: 24,
        nome: "La Casa Smart Fita LED 5m",
        categoria: "Fitas LED",
        descricao: "Fita LED com LEDs SMD 5050 de alta qualidade. Proteção IP65 contra água. Cores vibrantes e alto brilho. Fonte bivolt inclusa. Cortes a cada 5cm. Compatível com Alexa e Google Home.<br><br><strong>Especificações:</strong><br>• Comprimento: 5 metros<br>• LEDs: SMD 5050<br>• Voltagem: Bivolt (fonte inclusa)<br>• Conectividade: WiFi<br>• Cores: 16 milhões RGB<br>• Proteção: IP65<br>• Adesivo: Dupla face",
        preco: 149.00,
        precoAntigo: 175.29,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/fita-led.png",
        avaliacao: 4.2,
        totalAvaliacoes: 76,
        destaque: false,
        categoriaHome: "fitas"
    },

{
        id: 25,
        nome: "Positivo Smart Controle Universal",
        categoria: "Acessorios",
        descricao: "Controle universal que substitui todos os controles infravermelhos. Controle TV, ar-condicionado e outros aparelhos pelo celular. Comandos de voz via Alexa ou Google. Criação de cenas e rotinas.<br><br><strong>Especificações:</strong><br>• Tipo: Controle IR WiFi<br>• Conectividade: WiFi 2.4GHz<br>• Alcance: 8 metros<br>• Cobertura: 360°<br>• Alimentação: Micro USB<br>• App: Positivo Casa Inteligente<br>• Compatibilidade: TV, AC, áudio",
        preco: 99.00,
        precoAntigo: 116.47,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/controle-universal.png",
        avaliacao: 4.6,
        totalAvaliacoes: 145,
        destaque: true,
        categoriaHome: "acessorios"
    },
    {
        id: 26,
        nome: "Elgin Controle Universal Smart",
        categoria: "Acessorios",
        descricao: "Controle remoto universal para aparelhos infravermelhos. Alcance de 10m sem barreiras. Programação de cenas e agendamentos. Fácil instalação e uso, conecta direto ao roteador WiFi.<br><br><strong>Especificações:</strong><br>• Tipo: Controle IR WiFi<br>• Conectividade: WiFi<br>• Alcance: 10 metros<br>• Cobertura: 360°<br>• App: Elgin Smart<br>• Compatibilidade: Alexa, Google<br>• Cor: Vermelho",
        preco: 89.00,
        precoAntigo: 104.71,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/controle-universal.png",
        avaliacao: 4.5,
        totalAvaliacoes: 118,
        destaque: false,
        categoriaHome: "acessorios"
    },
    {
        id: 27,
        nome: "Intelbras EWS 101 Interruptor 1 Botão",
        categoria: "Acessorios",
        descricao: "Interruptor inteligente básico de 1 tecla. Design simples e texturizado. Controle por app ou comando de voz. Programação de horários e criação de rotinas. Fácil instalação no padrão brasileiro.<br><br><strong>Especificações:</strong><br>• Tipo: Interruptor touch<br>• Botões: 1 tecla<br>• Conectividade: WiFi<br>• Material: Plástico ABS<br>• Padrão: 4x2 brasileiro<br>• Voltagem: Bivolt<br>• App: Izy Smart",
        preco: 89.00,
        precoAntigo: 104.71,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/interruptor-1.png",
        avaliacao: 4.6,
        totalAvaliacoes: 156,
        destaque: true,
        categoriaHome: "acessorios"
    },
    {
        id: 28,
        nome: "Intelbras EWS 1003 Interruptor 3 Botões",
        categoria: "Acessorios",
        descricao: "Interruptor triplo touchscreen para sistemas complexos. Compatível com Alexa e Google Assistente. Rotinas pré-programadas via app. Design moderno em preto ou branco.<br><br><strong>Especificações:</strong><br>• Tipo: Interruptor touchscreen<br>• Botões: 3 teclas<br>• Conectividade: WiFi<br>• Padrão: 4x2<br>• Voltagem: Bivolt<br>• App: Izy Smart<br>• Cores: Preto/Branco",
        preco: 129.00,
        precoAntigo: 151.76,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/interruptor-3.png",
        avaliacao: 4.7,
        totalAvaliacoes: 203,
        destaque: true,
        categoriaHome: "acessorios"
    },
    {
        id: 29,
        nome: "Positivo Smart Plug Wi-Fi 10A",
        categoria: "Acessorios",
        descricao: "Tomada inteligente com monitoramento de energia. Liga/desliga aparelhos pelo celular. Programação de horários para economia. Compatível com Alexa e Google. Certificação Anatel.<br><br><strong>Especificações:</strong><br>• Tipo: Tomada inteligente<br>• Corrente: 10A (1000W)<br>• Voltagem: Bivolt 100-240V<br>• Conectividade: WiFi 2.4GHz<br>• Monitoramento: Consumo em tempo real<br>• App: Positivo Casa Inteligente",
        preco: 65.00,
        precoAntigo: 76.47,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/tomada.png",
        avaliacao: 4.4,
        totalAvaliacoes: 132,
        destaque: false,
        categoriaHome: "acessorios"
    },
    {
        id: 30,
        nome: "Ekaza EKNX-T005 Smart Plug",
        categoria: "Acessorios",
        descricao: "Tomada smart com botão físico e LED indicador. Fácil instalação plug and play. Monitoramento de consumo pelo app. Controle à distância e agendamento. Compatível com Alexa e Google.<br><br><strong>Especificações:</strong><br>• Tipo: Tomada inteligente<br>• Corrente: 16A<br>• Voltagem: Bivolt<br>• Conectividade: WiFi<br>• App: SmartLife/Tuya<br>• Monitoramento: Consumo de energia<br>• Botão físico: Sim (LED)",
        preco: 75.00,
        precoAntigo: 88.24,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/tomada.png",
        avaliacao: 4.4,
        totalAvaliacoes: 98,
        destaque: false,
        categoriaHome: "acessorios"
    },
    {
        id: 31,
        nome: "NovaDigital Interruptor WiFi 3 Botões",
        categoria: "Acessorios",
        descricao: "Interruptor com acabamento em vidro temperado. 3 botões touch para controle independente. Controle remoto e por voz. App Tuya/SmartLife/NovaDigital. Design moderno e sofisticado.<br><br><strong>Especificações:</strong><br>• Tipo: Interruptor touch<br>• Botões: 3 teclas<br>• Conectividade: WiFi 2.4GHz<br>• Padrão: 4x2<br>• Voltagem: Bivolt (110-220V)<br>• Material: Vidro temperado<br>• Potência: 2200W por botão",
        preco: 139.00,
        precoAntigo: 163.53,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/interruptor-vidro.png",
        avaliacao: 4.5,
        totalAvaliacoes: 87,
        destaque: false,
        categoriaHome: "acessorios"
    },
    {
        id: 32,
        nome: "Xiaomi Mi Smart Home Hub",
        categoria: "Acessorios",
        descricao: "Hub central para smart home Xiaomi. Conecta sensores e dispositivos inteligentes. Três tipos de conexão (WiFi, Zigbee, Bluetooth). Automações via app Mi Home. Integração com câmeras Xiaomi.<br><br><strong>Especificações:</strong><br>• Tipo: Hub central Zigbee<br>• Conectividade: WiFi 2.4GHz, Zigbee 3.0, Bluetooth 5.0<br>• Alcance: 50 metros<br>• App: Mi Home<br>• Compatibilidade: Apple HomeKit<br>• Dispositivos: Até 50",
        preco: 249.00,
        precoAntigo: 292.94,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/hub-xiaomi.png",
        avaliacao: 4.7,
        totalAvaliacoes: 234,
        destaque: true,
        categoriaHome: "acessorios"
    },

    // ========== 5. ASSISTENTES VIRTUAIS (8 produtos) ==========
    {
        id: 33,
        nome: "Amazon Echo Dot 5ª Geração",
        categoria: "Assistentes Virtuais",
        descricao: "Smart speaker compacto com Alexa. Controla dispositivos inteligentes por voz, reproduz músicas do Spotify/Amazon Music, responde perguntas e cria rotinas. Sensor de temperatura para automações climáticas. Som melhorado com graves mais profundos.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker<br>• Assistente: Alexa integrada<br>• Conectividade: WiFi, Bluetooth<br>• Alto-falante: 1.73\"<br>• Voltagem: Bivolt (adaptador)<br>• Sensor: Temperatura integrado<br>• Cores: Azul, Branco, Preto",
        preco: 299.00,
        precoAntigo: 351.76,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/echo-dot.png",
        avaliacao: 4.7,
        totalAvaliacoes: 567,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 34,
        nome: "Amazon Echo Pop",
        categoria: "Assistentes Virtuais",
        descricao: "Versão mais acessível e compacta do Echo. Design semicircular moderno que se encaixa em qualquer ambiente. Controle completo de casa inteligente via Alexa, streaming de música e chamadas mãos-livres. Ideal para quartos e espaços pequenos.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker compacto<br>• Assistente: Alexa<br>• Conectividade: WiFi, Bluetooth<br>• Alto-falante: Frontal direcional<br>• Dimensões: Semicircular compacta<br>• Voltagem: Bivolt<br>• Cores: Branco, Preto, Lavanda, Verde-água",
        preco: 224.00,
        precoAntigo: 263.53,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/echo-pop.png",
        avaliacao: 4.5,
        totalAvaliacoes: 342,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 35,
        nome: "Amazon Echo Spot (2024)",
        categoria: "Assistentes Virtuais",
        descricao: "Despertador inteligente com display e Alexa integrada. Mostra hora, previsão do tempo e controla rotinas matinais. Som vibrante para alarmes e música. Tela personalizável com diferentes mostradores de relógio. Perfeito para criados-mudos.<br><br><strong>Especificações:</strong><br>• Tipo: Smart display com relógio<br>• Tela: Semicircular com display<br>• Assistente: Alexa<br>• Conectividade: WiFi, Bluetooth<br>• Funções: Despertador inteligente<br>• Alto-falante: Som vibrante<br>• Cores: Preto, Branco, Azul",
        preco: 431.00,
        precoAntigo: 507.06,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/echo-spot.png",
        avaliacao: 4.4,
        totalAvaliacoes: 198,
        destaque: false,
        categoriaHome: "assistentes"
    },
    {
        id: 36,
        nome: "Amazon Echo Show 8 (3ª Geração)",
        categoria: "Assistentes Virtuais",
        descricao: "Smart display HD de 8 polegadas com áudio espacial. Videochamadas em HD, streaming de vídeo (Netflix, Prime Video), controle visual de dispositivos smart. Câmera com privacidade física. Hub central para automação residencial completa.<br><br><strong>Especificações:</strong><br>• Tipo: Smart display<br>• Tela: 8\" HD touchscreen<br>• Resolução: HD (1280x800)<br>• Câmera: 13 MP com enquadramento automático<br>• Assistente: Alexa<br>• Áudio: Espacial (2 alto-falantes 2\")<br>• Hub: Casa inteligente integrado",
        preco: 1399.00,
        precoAntigo: 1645.88,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/echo-show.png",
        avaliacao: 4.6,
        totalAvaliacoes: 456,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 37,
        nome: "Amazon Echo Dot Max (2025)",
        categoria: "Assistentes Virtuais",
        descricao: "Modelo top de linha com som envolvente e graves profundos. Hub de automação integrado com WiFi 6E. Tecnologia de adaptação acústica automática ao ambiente. Som premium para música e entretenimento, controle total de casa inteligente.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker premium/hub<br>• Conectividade: WiFi 6E, Bluetooth<br>• Alto-falantes: Tweeter 0.8\" + Woofer 2.5\"<br>• Assistente: Alexa avançada<br>• Hub: Casa inteligente integrado<br>• Adaptação: Áudio automático ao ambiente<br>• Cores: Grafite, Branco, Roxo",
        preco: 849.00,
        precoAntigo: 998.82,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/echo-max.png",
        avaliacao: 4.8,
        totalAvaliacoes: 289,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 38,
        nome: "Google Nest Mini (2ª Geração)",
        categoria: "Assistentes Virtuais",
        descricao: "Smart speaker compacto do Google com graves potentes. Controle por voz com \"Ok Google\", streaming de música, respostas personalizadas e controle de casa inteligente. Design sustentável com materiais reciclados. Fácil fixação na parede.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker compacto<br>• Assistente: Google Assistente<br>• Conectividade: WiFi, Bluetooth<br>• Alto-falante: Graves 2x mais potentes<br>• Voltagem: Bivolt<br>• Material: Tecido reciclado<br>• Cores: Carvão, Giz",
        preco: 389.00,
        precoAntigo: 457.65,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/nest-mini.png",
        avaliacao: 4.5,
        totalAvaliacoes: 412,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 39,
        nome: "Google Nest Audio",
        categoria: "Assistentes Virtuais",
        descricao: "Smart speaker focado em qualidade de áudio superior. Woofer e tweeter dedicados para som rico e envolvente. Google Assistente para controle completo da casa. Pode criar sistema de som estéreo com múltiplas unidades. Inclui 3 meses YouTube Premium.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker premium<br>• Alto-falantes: Woofer 75mm + Tweeter 19mm<br>• Potência: 75% mais alto que Google Home<br>• Assistente: Google Assistente<br>• Conectividade: WiFi, Bluetooth<br>• Material: 70% plástico reciclado<br>• Cores: Cinza-claro, Cinza-escuro",
        preco: 849.00,
        precoAntigo: 998.82,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/nest-audio.png",
        avaliacao: 4.7,
        totalAvaliacoes: 356,
        destaque: true,
        categoriaHome: "assistentes"
    },
    {
        id: 40,
        nome: "Apple HomePod mini",
        categoria: "Assistentes Virtuais",
        descricao: "Smart speaker da Apple com som imersivo 360°. Siri responde a comandos, controla HomeKit e reproduz Apple Music. Chip S5 para áudio computacional avançado. Reconhece até 6 vozes diferentes. Integração perfeita com iPhone via chip U1. Design compacto premium.<br><br><strong>Especificações:</strong><br>• Tipo: Smart speaker<br>• Assistente: Siri integrada<br>• Conectividade: WiFi, Bluetooth, Thread<br>• Áudio: 360° com áudio computacional<br>• Chip: S5 da Apple<br>• Dimensões: 8.43cm altura<br>• Cores: Branco, Preto, Amarelo, Laranja, Azul",
        preco: 649.00,
        precoAntigo: 763.53,
        desconto: 15,
        imagem: "assets/images/lampada.png",
        imagemDetalhes: "assets/images/homepod-mini.png",
        avaliacao: 4.8,
        totalAvaliacoes: 523,
        destaque: true,
        categoriaHome: "assistentes"
    }
];
// ===== FUNÇÕES AUXILIARES =====

function buscarProdutoPorId(id) {
    return PRODUTOS_DB.find(produto => produto.id === parseInt(id));
}

function buscarProdutosDestaque() {
    return PRODUTOS_DB.filter(produto => produto.destaque === true);
}

function buscarMaisVendidos() {
    return PRODUTOS_DB.filter(produto => produto.maisVendido === true);
}

function buscarPorCategoriaHome(categoriaHome) {
    return PRODUTOS_DB.filter(produto => produto.categoriaHome === categoriaHome);
}

function buscarProdutosPorCategoria(categoria) {
    return PRODUTOS_DB.filter(produto => produto.categoria === categoria);
}

function formatarPreco(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function calcularPrecoComDesconto(preco, desconto) {
    if (!desconto || desconto === 0) return preco;
    return preco * (1 - desconto / 100);
}

function buscarProdutosNovos() {
    return PRODUTOS_DB.filter(produto => produto.novo === true);
}

function buscarProdutosComDesconto() {
    return PRODUTOS_DB.filter(produto => produto.desconto > 0);
}

function buscarPorFaixaPreco(min, max) {
    return PRODUTOS_DB.filter(produto => {
        const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto);
        return precoFinal >= min && precoFinal <= max;
    });
}

function ordenarPorPrecoMenor(produtos) {
    return produtos.sort((a, b) => {
        const precoA = calcularPrecoComDesconto(a.preco, a.desconto);
        const precoB = calcularPrecoComDesconto(b.preco, b.desconto);
        return precoA - precoB;
    });
}

function ordenarPorPrecoMaior(produtos) {
    return produtos.sort((a, b) => {
        const precoA = calcularPrecoComDesconto(a.preco, a.desconto);
        const precoB = calcularPrecoComDesconto(b.preco, b.desconto);
        return precoB - precoA;
    });
}

function ordenarPorAvaliacao(produtos) {
    return produtos.sort((a, b) => b.avaliacao - a.avaliacao);
}

function pesquisarProdutos(termo) {
    termo = termo.toLowerCase();
    return PRODUTOS_DB.filter(produto => 
        produto.nome.toLowerCase().includes(termo) ||
        produto.descricao.toLowerCase().includes(termo) ||
        produto.categoria.toLowerCase().includes(termo)
    );
}