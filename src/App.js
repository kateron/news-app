import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Article from "./Article";
// import NewsTab from "./NewsTab";
// import Form from "react-bootstrap/Form";
import "./App.css";

var keyCode = 'ef9d052ad9fd45a190988d4af0f0feb1';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        // {
        //   title: "Julianne Moore on her characters and on-screen longevity",
        //   author: "CBS News",
        //   urlToImage:
        //     "https://cbsnews1.cbsistatic.com/hub/i/r/2019/08/11/6fe6de05-c33f-4586-8959-77608ffbf6b8/thumbnail/1200x630/f4b445ecc375a2e42230b75bd5967294/0811-sunmo-juliannemoore-1909634-640x360.jpg",
        //   description:
        //     "Oscar-winning actress Julianne Moore has specialized in playing challenging, fascinating characters, from indie classics to box-office hits. Jane Pauley reports. (Originally broadcast March 3, 2019.)",
        //   publishedAt: "2019-08-12T02:09:27+00:00"
        // },
        // {
        //   title: "Burger King staff mock cop by drawing cartoon pig on order",
        //   author: "Alexis Carey",
        //   urlToImage:
        //     "https://cdn.newsapi.com.au/image/v1/3148c36f942a72e175a3539ac8406850?width=650",
        //   description:
        //     "A group of fast food employees who insulted a police officer customer last week have been sacked after a Facebook post about the incident went viral.",
        //   publishedAt: "2019-08-12T01:04:06Z"
        // },
        // {
        //   title:
        //     "Pensioners 'hoodwinked' into closing Post Office card account",
        //   author: "Daily Mail",
        //   urlToImage:
        //     "https://i.dailymail.co.uk/1s/2019/08/12/01/17168792-0-image-a-3_1565569722239.jpg",
        //   description:
        //     "Campaigners said letters had been sent from Whitehall to the elderly telling them to switch to a bank account for receipt of their state pension as department for work and pensions cuts costs.",
        //   publishedAt: "2019-08-12T00:40:13+00:00"
        // }
      ],
      businessArticles:[], 
      politicsArticles:[],
      sportArticles:[],
      searchedArticles: [], 
      activeKey: 'business'
    };
  }

 loadHeadlinesByCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        // console.log(articles);
        if(category=='business'){
          this.setState({businessArticles:articles})
        }
        if(category=='politics'){
          this.setState({politicsArticles:articles})
        }
        if(category=='sport'){
          this.setState({sportArticles:articles})
        }
        
      })
  }

  loadHeadlinesByTerm = (term) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        this.setState()
        // console.log(articles);
      })
  }

  componentDidMount(){
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('politics');
    this.loadHeadlinesByCategory('sport');
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey:key});
  }

  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    this.setState({activeKey:'search'})
  }
  

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
            <div className='nav-container'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link eventKey='business'>business</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='politics'>politics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='sport'>sport</Nav.Link>
                </Nav.Item>
              </Nav>

              <form className='col-5 search-field'>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    placeholder='Enter Keyword'
                    aria-label="Recipient's username"
                    aria-describedby='button-addon2'
                  />
                  <div className='input-group-append'>
                    <button onClick={this.handleSearchSubmitClick}
                      className='btn btn-outline-secondary btn-sm'
                      type='submit'
                      id='button-addon2'>
                      search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <Tab.Content>
              <Tab.Pane className='tab-pane' eventKey='business'>
                <h1>Business</h1>
                <CardColumns className='articles'>
                  {this.state.businessArticles.map(article => {
                    var articleProps = {
                      ...article
                    };
                    return <Article {...articleProps} />;
                  })}
                </CardColumns>
              </Tab.Pane>
              <Tab.Pane className='tab-pane' eventKey='politics'>
                <h1>Politics</h1>
                <CardColumns className='articles'>
                  {this.state.politicsArticles.map(article => {
                    var articleProps = {
                      ...article
                    };
                    return <Article {...articleProps} />;
                  })}
                </CardColumns>
              </Tab.Pane>
              <Tab.Pane className='tab-pane' eventKey='sport'>
                <h1>Sport</h1>
                <CardColumns className='articles'>
                  {this.state.sportArticles.map(article => {
                    var articleProps = {
                      ...article
                    };
                    return <Article {...articleProps} />;
                  })}
                </CardColumns>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="search">
              <h1>Business</h1>
                <CardColumns className='articles'>
                  {this.state.businessArticles.map(article => {
                    var articleProps = {
                      ...article
                    };
                    return <Article {...articleProps} />;
                  })}
                </CardColumns>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default App;
