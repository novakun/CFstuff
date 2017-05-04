class Cat
	attr_reader :color, :breed, :legs, :gender
	attr_accessor :name, :owner, :age, :weight, :favfood, :speaks

	def initialize(color, breed, legs, gender, name, owner, age, weight,favfood, speaks)
		@color = color
		@breed = breed
		@legs = 4
		@gender = gender
		@name = name
		@owner = owner
		@age = age
		@weight = weight
		@hungry = true
		@favfood = favfood
		@speaks = speaks
	end

	def feed(food)
		puts "Yumm, "+ food + "!!!"
		@hungry = false
	end

	def hungry?
		if @hungry
			puts "YES! I want #{favfood}"
		else
			puts "NAH, I\'m full!"
		end
	end

	def speak
		puts "Meaow!"
	end
	def cantalk?
		if @speaks
			puts "Yerp, i\'m a talking cat!"
		else
			puts speak
		end
	end
end

kitty = Cat.new("pink","sphynx",4,"Female","Buttons","Bob",7,4.5,"lasagna",true)

kitty.speak
puts"Hey, didn't see you there. What type of animal are you?"
kitty.speak 
puts "Let me use google translate.... aha! you are a #{kitty.class}"
puts "Do you have an owner?"
kitty.speak
puts "translating... #{kitty.owner}"
puts "and what's your name"
puts "Ahem, my name is #{kitty.name}"
puts "Dude! you can speak!"
kitty.cantalk?
puts "Yeah, the google translate joke was extended a bit too long..."
puts "Say, #{kitty.name}, are you hungry?"
kitty.hungry?
puts "Alright! You got it but in one condition. Describe yourself #{kitty.name}"
puts "Ok, anything for a good #{kitty.favfood}"
puts "My name is #{kitty.name}"
puts "I\'m  #{kitty.age} years old."
puts "My breed is #{kitty.breed} and my coat colour is #{kitty.color} I weight #{kitty.weight}kg. and am a #{kitty.gender} #{kitty.class}"



