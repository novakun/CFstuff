
	#welcome screen and rules
	puts "\n\n\n"
	puts "#################################################"
	puts "Welcome to rock, paper, scissors, lizard, spock!"
	puts "#################################################"
	puts "\n\n\n"
	puts "GAME RULES:"
	puts "\n"
	puts "-----------------------------------------------------------------"
	puts "Scissors cuts paper, paper covers rock, rock crushes lizard,\nlizard poisons Spock, Spock smashes scissors,\nscissors decapitates lizard, lizard eats paper,\npaper disproves Spock, Spock vaporizes rock,\nand rock crushes scissors."
  puts "-----------------------------------------------------------------"
  puts "\n"
	#END welcome screen and rules
def play
	puts "========================================================================="
	print "please choose and type between: rock, paper, scissors, lizard or spock. "
	puts "\n"
	p_choice = gets.chomp
	puts "========================================================================="
	puts "\n\n"
# random computer choice
	c_choice = rand(5)
	if c_choice == 0
		c_choice = "rock"
	elsif c_choice == 1
		c_choice = "paper"
	elsif c_choice == 2
		c_choice ="scissors"
	elsif c_choice == 3
		c_choice = "lizard"
	elsif c_choice == 4
		c_choice = "spock"
	end #end random computer choice
# visualises player and computer choices
	puts "----------------------------"		
	puts "You choose #{p_choice}"
	puts "Computer chooses #{c_choice}"
	puts "----------------------------"
# replay
	def replay?
		print "Play again? "
		again = gets.chomp
		if again.downcase == "yes" || again.downcase =="y"
			play
		else
			puts "Thanks for playing rock, paper, scissors, lizard, spock!\nSee you soon!"
		end
	end #end replay?
# cases
	if p_choice == "lizard" && c_choice == "spock"
		puts "lizard poisons Spock! \nYou win!"
		replay?
	elsif p_choice == "lizard" && c_choice == "paper"
		puts "lizard eats paper! \nYou win!"	
		replay?
	elsif p_choice == "rock" && c_choice == "scissors"
		puts "rock crushes scissors! \nYou win!"	
		replay?
	elsif p_choice == "rock" && c_choice == "lizard"
		puts "rock crushes lizard! \nYou win!"
		replay?	
	elsif p_choice == "paper" && c_choice == "spock"
		puts "paper disproves Spock! \nYou win!"
		replay?	
	elsif p_choice == "paper" && c_choice == "rock"
		puts "paper covers rock! \nYou win!"
		replay?
	elsif p_choice == "scissors" && p_choice == "paper"
		puts "scissors cut paper! \nYou win!"
		replay?
	elsif p_choice == "scissors" && c_choice == "lizard"
		puts "scissors decapitate lizard! \nYou win!"	
		replay?
	elsif p_choice == "spock" && c_choice == "scissors"
		puts "spock smashes scissors! \n  You win!"	
		replay?
	elsif p_choice == "spock" && c_choice == "rock"
		puts "spock vaporizes rock! \nYou win!"	
		replay?
	elsif p_choice == c_choice
		puts "Is a tie!"
		replay?
	else
		puts "#{c_choice} crushes #{p_choice}! \nYou lose!"
		replay?
	end # end cases
end  # end play

play	
		
		
	
		
		
	






