# def choose
# 	puts "Do you like programming? Please answer with a simple Yes or No."
# 	choice = gets.chomp
# 	if (choice.downcase =="yes")
# 		puts "That\'s great!"
# 	elsif (choice.downcase == "no")
# 		puts "That\'s too bad!"
# 	else
# 		puts "UPS! I did\'t understand you. Please answer only with yes or no."
# 		puts "Lets start from the beginning:"
# 		choose
# 	end
# end
# choose
# 		Keeping as a reference

# SWITCH VERSION

def choose
	puts "Do you like programming? Aswers I\'ll accept: yes, no, or maybe."
	choice = gets.chomp
	case choice.downcase
	when "yes"
		puts "That\'s great!"
	when "no"
		puts "That\'s too bad!"
	when "maybe"
		puts "Do or do not. There is no try."
	else
		puts "Sorry, I only understand: yes, no or maybe."
	end
end
choose