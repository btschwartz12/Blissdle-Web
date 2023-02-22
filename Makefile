CXX ?= g++
CXXFLAGS ?= -Wall -Werror -pedantic -g --std=c++11

run: index rowdy blissdle
	open http://localhost:8080
	php -S localhost:8080

index: index.html index_script.js



rowdy: rowdy.html

blissdle: blissdle.html blissdle/blissdle.js

# Remove automatically generated files
clean :
	rm -rvf *.exe *~ *.out *.DS_Store *.stackdump

.PHONY: index rowdy blissdle poetl weddle wardle stage code

code:
	@code .

stage:
	@make clean
	git add .

poetl:
	open https://poeltl.dunk.town
	open https://www.gannett-cdn.com/usatoday/editorial/sports/nba/nba-projections-2016.jpg

weddle:
	open https://www.weddlegame.com
	open https://images.squarespace-cdn.com/content/v1/5ce3ea91ae2b190001d02fba/1601444797075-M9N6ZBUUCKQZV1FD1CHC/Teams+by+division.jpg?format=1000w

wardle:
	open https://wardle.app
	open https://i.imgur.com/MtlMYqk.jpg
