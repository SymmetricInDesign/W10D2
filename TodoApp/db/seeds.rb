# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Todo.destroy_all
  
    puts "Creating todos..."
  
    todo1 = Todo.create!(title: "Do homework", body: "no")
    todo2 = Todo.create!(title: "Buy food", body: "ok")
    todo3 = Todo.create!(title: "water plants", body: "no")
    todo4 = Todo.create!(title: "complete fullstack project", body: "no")
  
  end