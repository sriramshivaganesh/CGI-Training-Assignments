class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def info(self):
        print(f"Make : {self.make}, Model : {self.model}")


class Car(Vehicle):
    def __init__(self, make, model, num_of_doors):
        super().__init__(make, model)
        self.num_of_doors = num_of_doors

    def info(self):
        super().info()
        print(f"Number of doors : {self.num_of_doors}")


    def start(self):
        print("Car started!")

    def stop(self):
        print("Car stopped!")


class Motorcycle(Vehicle):
    def __init__(self, make, model, no_of_gears):
        super().__init__(make, model)
        self.no_of_gears = no_of_gears

    def info(self):
        super().info()
        print(f"Number of gears : {self.no_of_gears}")

    def start(self):
        print("Bike started!")

    def stop(self):
        print("BIke stopped!")


car = Car("Hundai", "i-10", 4)
bike = Motorcycle("Yamaha", "mt-15", 6)

car.info()
car.start()
car.stop()

print("\n")

bike.info()
bike.start()
bike.stop()
