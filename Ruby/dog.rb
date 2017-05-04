class Pet
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
end

class Dog < Pet
	attr_reader :color, :breed, :legs, :gender
	attr_accessor :name, :owner, :age, :weight, :favfood, :speaks

	def speak
		puts "Woof!"
	end
	def cantalk?
		if @speaks
			puts "Yerp, i\'m a talking dog!"
		else
			puts speak
		end
	end
end

doggie = Dog.new("ginger","aussie",4,"Female","Nova","Rafael",2,21,"sussages",true)

doggie.speak
puts"Hey, didn't see you there. What type of animal are you?"
doggie.speak 
puts "Let me use google translate.... aha! you are a #{doggie.class}"
puts "Do you have an owner?"
doggie.speak
puts "translating... #{doggie.owner}"
puts "and what's your name"
puts "Ahem, my name is #{doggie.name}"
puts "Dude! you can speak!"
doggie.cantalk?
puts "Yeah, the google translate joke was extended a bit too long..."
puts "Say, #{doggie.name}, are you hungry?"
doggie.hungry?
puts "Alright! You got it but in one condition. Describe yourself #{doggie.name}"
puts "Ok, anything for a good #{doggie.favfood}"
puts "My name is #{doggie.name}"
puts "I\'m  #{doggie.age} years old."
puts "My breed is #{doggie.breed} and my coat colour is #{doggie.color} I weight #{doggie.weight}kg. and am a #{doggie.gender} #{doggie.class}"



