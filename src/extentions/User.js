module.exports = Structures => {
	Structures.extend('User', DiscordUser =>
		class User extends DiscordUser { // eslint-disable-line no-unused-vars
			constructor(...args) {
				super(...args);
				this.data = {};
				this.data.fetch = this.fetch.bind(this);
				this.data.set = this.set.bind(this);
				this.data.add = this.add.bind(this);
				this.data.subtract = this.subtract.bind(this);
				this.data.delete = this.delete.bind(this);
			}

			fetch(name) {
				if (!name) throw new Error('No DB name Provided');
				return this.client.db.fetch(`${name}_${this.id}`);
			}

			set(name, data) {
				if (!name) throw new Error('No DB name Provided');
				if (!data) throw new Error('No data Provided');
				return this.client.db.set(`${name}_${this.id}`, data);
			}

			add(name, number) {
				if (!name) throw new Error('No DB name Provided');
				if (!number) throw new Error('No number Provided');
				return this.client.db.add(`${name}_${this.id}`, parseInt(number));
			}

			subtract(name, number) {
				if (!name) throw new Error('No DB name Provided');
				if (!number) throw new Error('No number Provided');
				return this.client.subtract(`${name}_${this.id}`, parseInt(number));
			}

			delete(name) {
				if (!name) throw new Error('No DB name Provided');
				return this.client.db.delete(`${name}_${this.id}`);
			}
		});
};
