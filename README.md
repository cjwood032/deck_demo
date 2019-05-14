# Card Deck Demo
This repo contains both the frontend and backend for the deck of cards demo

Video demo: https://youtu.be/SRV2PL_fAuQ
installation:
1. From github, download or clone the repo into a desired folder. 

2. Navigate terminal to  the root folder for the application. 

3. Run “bundle install” which will  install the appropriate gem files for the application. 

4. Run “rake db:migrate”  which will create the tables in which all the information will be stored. 

5. Run rake db:seed which will create the cards.

6. Run “rails s -p3001” to start up the server.

7. In a new terminal tab or window change directory to the 'deck_client'.

8. In deck_client terminal app, type 'yarn start' to start the front end client.

9. Navigate an internet browser to the running server (local host 3000 by default) 

The app is up and running! 

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cjwood032/ccg_game_tracker. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
