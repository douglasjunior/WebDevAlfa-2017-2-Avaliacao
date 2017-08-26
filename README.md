# Avaliação WebDev-Alfa 2017/2

Avaliação da disciplina de **Desenvolvimento de Aplicações Híbridas**.

# Requisitos

Utilizando a tecnologia móvel cross-platform React Native, desenvolva um App que exiba os estabelecimentos próximos à localização do usuário utilizando a API do Google Places.

O App deve ter uma tela inicial onde o usuário possa pesquisar o nome de um estabalecimento próximo à sua localização. Na tela inicial deve existir um campo de busca, um botão para buscar e a lista de resultados. A listagem deve exibir o nome do estabalecimento, a foto principal em miniatura e o endreço formatado.

Ao clicar em um estabalecimento da lista, uma janela com informações detalhadas do estabelecimento deve ser exibida. Na janela de detalhes devem ser exibidos o nome do estabelecimento, a foto ampliada, endereço, números de telefone, pontuação (rating) e localização no mapa (utilizando mapa estático como imagem).

Para iniciar, você pode efetuar o Fork deste projeto, ou criar seu próprio projeto utilizando o comando `react-native init <nome-projeto>`.

# Entrega

O projeto final deverá ser entregue via GitHub, sendo que o aluno deverá me enviar por e-mail o Link do projeto até **16 de setembro de 2017**.

_Não esqueça de assinar o e-mail com o seu nome completo._

# Projeto

## Instalando as dependências

1. Faça o Clone ou Download deste repositório para o seu computador.

2. Através do `cmd` ou `git bash` instale as dependências do projeto. 
    ```bash
    yarn install
    ```
    
    _Obs: caso ainda não tenha o Yarn, instale com o comando `npm install -g yarn`_
    

## Executando o projeto Android

Antes de executar o projeto no Android, verifique se o SDK 23.0.1 e todas as dependências necessárias estão instaladas em seu computador. 
Para facilitar este processo abra a pasta `android` deste repositório com o **Android Studio** e execute os procedimentos recomendados 
por ele. *Importante ressaltar que, se o Android Studio pedir para atualizar a versão do Gradle, apenas ignore.*

1. Abra o emulador do Android com versão SDK 16 ou superior, ou conecte o seu dispositvo ao USB.

    _Para verificar se o dispositivo ou o emulador foram reconhecidos, execute o comando_
    
    ```bash
    adb devices
    ```

2. Através do `cmd` ou `git bash` execute o projeto Android:
    ```bash
    react-native run-android
    ```
    
3. Se o `package monitor` não for iniciado automaticamente, execute o comando:
    ```bash
    npm start
    ```

## Executando o projeto iOS

1. Utilizando **Xcode** abra o projeto através do arquivo `ios/PrimeiroProjeto.xcodeproj`.

2. Aguarde a indexação e execute o projeto utilizando um emulador ou dispositivo de sua preferência.

3. Se o `package monitor` não for iniciado automaticamente, execute o comando:
    ```bash
    npm start
    ```

# Google Places API

O Google Places é uma API que permite ter acesso ao mesmo banco de dados usado pelo Google Maps e o Google+ Local. O Places contém mais de 100 milhões de empresas e pontos de interesse atualizados com frequência por meio de listagens confirmadas pelos proprietários e contribuições moderadas por usuários.

## Obtendo a chave da API

Para poder ter acesso ao Google Places, você precisa obter uma chave de autenticação disponitilizada gratuitamente no próprio portal de desenvolvedores do Google.

1. Acesse o [portal do Google Places](https://developers.google.com/places/web-service/?hl=pt-br) e clique em **Obter uma Chave** no canto superior direito.

2. Na janela que aparecer, selecione ou crie um novo projeto.

3. Em seguida a chave de acesso será exibida na tela, copie a guarde para utilizar no projeto. Caso precise visualizar a chave novamente [acesse o console de desenvolvedores do Google](https://console.developers.google.com/apis/credentials) selecione o projeto desejado na barra superior do painel, e clique na opção **credenciais** no menu lateral esquerdo.

_[Saiba mais sobre a obtenção da chave.](https://developers.google.com/places/web-service/get-api-key?hl=pt-br)_

## Utilizando o Google Places

Para esta avaliação, todas as chamadas são realizadas via `HTTP GET` e o retorno será(ão) objeto(s) `JSON` na maioria dos casos.

### Buscando os Locais próximos ao usuário

```url
https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurante&location=-24.0436553,-52.3781098&key=AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9
```

Neste exemplo são utilizados três parâmetros:

| Parâmetro | Descrição | Valor de exemplo |
|     -     |      -    |    -    |
| `query` | O serviço Google Places retornará correspondências possíveis com base nessa string e ordenará os resultados com base na relevância percebida. | restaurante |
| `location` | A latitude/longitude em torno da qual você deseja recuperar informações de local. Deve ser especificado como latitude,longitude. | -24.0436553,-52.3781098 |
| `key` | A chave de API do aplicativo. Essa chave identifica o aplicativo para fins de gerenciamento de cotas e de forma que locais adicionados a partir dele sejam imediatamente disponibilizados para o aplicativo.  | AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9 |

Retorno de exemplo contendo apenas os dados relevantes para este projeto:

```json
{
    "html_attributions": [...],
    "next_page_token": "CpQCCAEAAEc4k0rDvPQop...",
    "results": [
        {
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "957d58ad00e8bba4a2dcb2eccb277a9216ab8ca7",
            "name": "Cayenna steak house",
            "formatted_address": "R. Francisco Ferreira Albuquerque, 1401 - Centro, Campo Mourão - PR, 87302-220, Brazil",
            "photos": [
                {
                    "height": 3096,
                    "width": 4128,
                    "photo_reference": "CmRaAAAASJv_KxO7drGx6gL4-tlz0ZzXV0PYg9lG6NSwmEi0rlmnCIlfmFoyuXeYrK-3rjnr60BFG-uG8uKbr8VyKfar0szll6wNLXd4mLu8Uu_DbvC0g8tz82dLFfXtivyrjDOAEhCiizzDPbUC7RjeopTeB_BPGhTgy17by-frundQPoCusO7mqawySQ",
                    ...
                }
            ],
            "place_id": "ChIJA773-j517ZQRAEoIp-JbFn8",
            "rating": 4.5,
            ...
        },
        { ... },
        { ... },
        { ... },
        { ... }
    ],
    "status": "OK"
}
```

_[Saiba mais sobre o Place Search.](https://developers.google.com/places/web-service/search?hl=pt-br)_

### Buscando a foto do local

```url
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAASJv_KxO7drGx6gL4-tlz0ZzXV0PYg9lG6NSwmEi0rlmnCIlfmFoyuXeYrK-3rjnr60BFG-uG8uKbr8VyKfar0szll6wNLXd4mLu8Uu_DbvC0g8tz82dLFfXtivyrjDOAEhCiizzDPbUC7RjeopTeB_BPGhTgy17by-frundQPoCusO7mqawySQ&key=AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9
```

Neste exemplo são utilizados três parâmetros:

| Parâmetro | Descrição | Valor de exemplo |
|     -     |      -    |    -    |
| `maxheight` ou `maxwidth` | Especifica em pixels a altura ou largura máxima desejada da imagem retornada pelo serviço Place Photos. Se a imagem for menor que os valores especificados, a imagem original será retornada. | 400 |
| `photoreference` | Um identificador de string que identifica uma foto de forma exclusiva. Referências de fotos são retornadas de uma solicitação de Place Search ou Place Details | CmRaAAAASJv_KxO7drGx6gL4-tlz0ZzXV0PYg9lG6NSwmEi0rlmnCIlfmFoyuXeYrK-3rjnr60BFG-uG8uKbr8VyKfar0szll6wNLXd4mLu8Uu_DbvC0g8tz82dLFfXtivyrjDOAEhCiizzDPbUC7RjeopTeB_BPGhTgy17by-frundQPoCusO7mqawySQ |
| `key` | A chave de API do aplicativo. Essa chave identifica o aplicativo para fins de gerenciamento de cotas e de forma que locais adicionados a partir dele sejam imediatamente disponibilizados para o aplicativo.  | AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9 |

O retorno desta requisição é o arquivo de imagem correspondente ao `photoreference`.

_[Saiba mais sobre o Place Photos.](https://developers.google.com/places/web-service/photos?hl=pt-br)_

### Buscando os Detalhes do local

```url
https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJA773-j517ZQRAEoIp-JbFn8&key=AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9
```

Neste exemplo são utilizados dois parâmetros:

| Parâmetro | Descrição | Valor de exemplo |
|     -     |      -    |    -    |
| `placeid` | Um identificador textual que identifica um local de forma exclusiva retornado de uma Place Search | ChIJA773-j517ZQRAEoIp-JbFn8 |
| `key` | A chave de API do aplicativo. Essa chave identifica o aplicativo para fins de gerenciamento de cotas e de forma que locais adicionados a partir dele sejam imediatamente disponibilizados para o aplicativo.  | AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9 |

Retorno de exemplo contendo apenas os dados relevantes para este projeto:

```json
{
    "html_attributions": [...],
    "result": {
        "formatted_address": "R. Francisco Ferreira Albuquerque, 1401 - Centro, Campo Mourão - PR, 87302-220, Brazil",
        "formatted_phone_number": "(44) 3525-3077",
        "geometry": {
            "location": {
                "lat": -24.04399309999999,
                "lng": -52.3794631
            },
            ...
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "957d58ad00e8bba4a2dcb2eccb277a9216ab8ca7",
        "name": "Cayenna steak house",
        "photos": [
            {
                "height": 3096,
                "photo_reference": "CmRaAAAAt_A9dnQ4CIQP0djehQzISSd2gw39mkzQmSrEJ-y9W52rR5BDHF7D39q_QGNvLyzr9sIBFb9KuiCS4Ln3tbMFs900N3Lr_ZjrYc3MG5NIskm6rW7pnoc5Q4QPHz8E4mWFEhBFKDygZtTYxGMHBEslbg4pGhSgQXIqW63lw9zQk1CZ54gReYRHcw",
                "width": 4128,
                ...
            },
            { ... },
            { ... }
        ],
        "place_id": "ChIJA773-j517ZQRAEoIp-JbFn8",
        "rating": 4.5,
        "url": "https://maps.google.com/?cid=9157607921327557120",
        ...
    },
    "status": "OK"
}
```

_[Saiba mais sobre o Place Details.](https://developers.google.com/places/web-service/details?hl=pt-br)_

# Mapa estático

Crie um mapa com base em parâmetros de URL enviados por meio de uma solicitação HTTPS padrão. Exiba o mapa como uma imagem.

Para utilizar a [API de Mapa Estático](https://developers.google.com/maps/documentation/static-maps/intro?hl=pt-br) também é preciso obter uma chave de autenticação. Os [passos para obetnção da chave](https://developers.google.com/maps/documentation/static-maps/get-api-key?hl=pt-br) são praticamente os mesmos do Google Places.

## Requisitando a imagem do Mapa

```url
https://maps.googleapis.com/maps/api/staticmap?markers=-24.0436553,-52.3781098&zoom=16&size=600x300&key=AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9
```

Neste exemplo são utilizados quatro parâmetros:

| Parâmetro | Descrição | Valor de exemplo |
|     -     |      -    |    -    |
| `markers` | Define um ou mais marcadores para inserir em pontos específicos da imagem. Esse parâmetro comporta uma localização como um par de {latitude,longitude} separado por vírgula. | -24.04399309999999,-52.3794631 |
| `zoom` | Define o nível de zoom do mapa, o que determina o nível de expansão do mapa.  | 16 |
| `size` | Define as dimensões retangulares da imagem do mapa. Esse parâmetro comporta uma string no formato {horizontal_value}x{vertical_value} | 600x300 |
| `key` | A chave de API do aplicativo. Essa chave identifica o aplicativo para fins de gerenciamento de cotas e de forma que locais adicionados a partir dele sejam imediatamente disponibilizados para o aplicativo.  | AIzaSyB77R2dTnOzoDrWpO0FHnwzDQJKd4faPD9 |

O retorno desta requisição é o arquivo de imagem correspondente ao mapa solicitado.

_[Saiba mais sobre o Static Maps.](https://developers.google.com/maps/documentation/static-maps/intro?hl=pt-br)_

